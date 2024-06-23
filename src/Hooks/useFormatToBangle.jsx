import { useCallback } from "react";

const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const bengaliMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const useFormatToBangle = () => {
  const convertToBengaliNumbers = useCallback((num) => {
    return num
      .toString()
      .split("")
      .map((digit) => bengaliNumbers[parseInt(digit)])
      .join("");
  }, []);

  const formatTimeToBengali = useCallback(
    (timeString) => {
      const [hours, minutes] = timeString.split(":").map((num) =>
        convertToBengaliNumbers(parseInt(num))
      );
      return `${hours}:${minutes}`;
    },
    [convertToBengaliNumbers]
  );

  const formatToBengaliDate = useCallback(
    (dateString) => {
      const [datePart, timePart] = dateString.split("T");
      const [year, month, day] = datePart.split("-");
      // const [hours, minutes] = timePart.split(":");
      
      const bengaliYear = convertToBengaliNumbers(parseInt(year));
      const bengaliMonth =
        bengaliMonths[parseInt(month) - 1]; // Adjust month index
      const bengaliDay = convertToBengaliNumbers(parseInt(day));
      // const bengaliTime = formatTimeToBengali(`${hours}:${minutes}`);

      return ` ${bengaliDay} ${bengaliMonth},${bengaliYear} `;
    },
    [convertToBengaliNumbers, formatTimeToBengali]
  );

  return { formatToBengaliDate };
};

export default useFormatToBangle;
