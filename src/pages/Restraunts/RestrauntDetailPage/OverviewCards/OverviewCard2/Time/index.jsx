import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeOptions = [
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "13:00 PM",
  "13:30 PM",
  "14:00 PM",
  "14:30 PM",
  "15:00 PM",
  "15:30 PM",
  "16:00 PM",
  "16:30 PM",
  "17:00 PM",
  "17:30 PM",
  "18:00 PM",
  "18:30 PM",
  "19:00 PM",
  "19:30 PM",
  "20:00 PM",
  "20:30 PM",
  "21:00 PM",
  "21:30 PM",
  "22:00 PM",
  "22:30 PM",
  "23:00 PM",
  "23:30 PM",
];

const Time = ({ setFormData }) => {
  const handleTimeSelection = (selectedTime) => {
    const formattedTime = selectedTime.replace(/\b(?:AM|PM)\b/g, "").trim();
    setFormData((prev) => {
      return {
        ...prev,
        reservation_time: formattedTime,
      };
    });
  };

  return (
    <Select onValueChange={handleTimeSelection}>
      <div className="text-black">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {timeOptions.map((time, index) => (
              <SelectItem key={index} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </div>
    </Select>
  );
};

export default Time;
