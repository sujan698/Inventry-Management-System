import {
  ConflictException,
  Injectable,
  NotFoundException,

} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { capatalizeFirstLetterOfEachWordInAphrase } from 'src/helpers/capatilize';

@Injectable()
export class ItemsService {
  constructor(private prismaService: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    // Capitalize the first letter of each word in the item name
    createItemDto.name = capatalizeFirstLetterOfEachWordInAphrase(
      createItemDto.name,
    );
    return this.prismaService.$transaction(async (tx) => {
      const item = await tx.item.upsert({
        where: {
          name: createItemDto.name,
        },
        update: {},

        create: {
          name: createItemDto.name,
          quantity: createItemDto.quantity,
          price: createItemDto.price,
          ...(createItemDto.description && {
            description: createItemDto.description,
          }),
          ...(createItemDto.discount && {
            discount: createItemDto.discount,
          }),
          ...(createItemDto.discount_type && {
            discount_type: createItemDto.discount_type,
          }),
          ...(createItemDto.tax && {
            tax: createItemDto.tax,
          }),
        },
      });

      const itemOrganization = await tx.itemOrganization.findFirst({
        where: {
          itemId: item.id,
          organizationId: createItemDto.organizationId,
        },
      });
      if (itemOrganization) {
        throw new ConflictException('Item already exists in the organization');
      }
      await tx.itemOrganization.create({
        data: {
          itemId: item.id,
          organizationId: createItemDto.organizationId,
        },
      });
    });
  }

  async findAll(organizationId: number) {
    return this.prismaService.itemOrganization.findMany({
      where: { organizationId },
      include: {
        item: true,
      },
    });
  }

  async findOne(id: number, organizationId: number) {
    return this.getItemById(id, organizationId);
  }

  async update(
    id: number,
    organizationId: number,
    updateItemDto: UpdateItemDto,
  ) {
    updateItemDto.name = capatalizeFirstLetterOfEachWordInAphrase(
      updateItemDto.name,
    );
    
    return this.prismaService.item.update({
      where: { id },
      data: updateItemDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.item.delete({ where: { id } });
  }

  private async getItemById(id: number, organizationId: number) {
    const item = await this.prismaService.itemOrganization.findFirst({
      where: {
        itemId: id,
        organizationId: organizationId,
      },
      include: {
        item: true,
      },
    });

    if (!item) {
      throw new NotFoundException(`Item with ${id} does not exist`);
    }

    return item;
  }
}
