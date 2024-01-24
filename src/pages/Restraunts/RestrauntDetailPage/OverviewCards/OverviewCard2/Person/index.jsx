import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PersonCard = ({ setFormData }) => {
  const handleSelectChange = (persons) => {
    const selectedPersons = parseInt(persons, 10);

    setFormData((prev) => {
      return {
        ...prev,
        reservation_covers: selectedPersons,
      };
    });
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <div className="text-black">
        <SelectTrigger className="w-full ">
          <SelectValue placeholder="Select Person" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">1 Person</SelectItem>
            <SelectItem value="2">2 Person</SelectItem>
            <SelectItem value="3">3 Person</SelectItem>
            <SelectItem value="4">4 Person</SelectItem>
            <SelectItem value="5">5 Person</SelectItem>
            <SelectItem value="6">6 Person</SelectItem>
            <SelectItem value="7">7 Person</SelectItem>
            <SelectItem value="8">8 Person</SelectItem>
            <SelectItem value="9">9 Person</SelectItem>
            <SelectItem value="Large Party">Large Party</SelectItem>
          </SelectGroup>
        </SelectContent>
      </div>
    </Select>
  );
};

export default PersonCard;