import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  label: string;
  items: { label: string; value: string }[];
  placeholder?: string;
  selectedValue?: string;
  setSelectedValue: any;
}

export const SelectComp: React.FC<SelectProps> = ({
  items,
  label,
  selectedValue,
  setSelectedValue,
  placeholder,
}) => {
  const onChange = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <Select value={selectedValue} onValueChange={onChange}>
      <SelectTrigger className="min-w-[180px] h-12 text-base">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-base">{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="text-base"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
