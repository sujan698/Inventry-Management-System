

interface CustomInputProps {
    label: string,
    setValue: (value: string) => void,
    type?:string,
    checked?:boolean,
    required?:boolean,

  }
  const CustomInput = ({ label, setValue,type="text",checked,required }: CustomInputProps) => {
    return (
      <div className="item">
      <label htmlFor={label.toLowerCase()}>{label}</label>
        <input
          name={label.toLowerCase()}
          type={type}
          checked={checked}
          required={required}
          placeholder={label}
          onChange={(e) => setValue(e.target.value)}
        />
    </div>
    );
  };
  
  export default CustomInput;