"use client";
import { countries } from "@/utils/constent";
import {
  BookingCalenderIcon,
  CalendarIcon,
  CallIcon,
  MailIcon,
  UserIcon,
} from "@/utils/formIcons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuickForm } from "@/hooks/useQuickForm.ts";
import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Form2Props {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView?: boolean;
  rounded?: boolean;
  singleDate?: boolean; // New prop for single date mode
}

const Form2: React.FC<Form2Props> = ({
  setOpen,
  gridView = false,
  rounded = false,
  singleDate = false,
}) => {
  const [countryCode, setCountryCode] = useState("+91");

  const {
    formData,
    errors,
    dateRange,
    isSubmitting,
    submitSuccess,
    handleInputChange,
    handleDateChange,
    handleSingleDateChange,
    handleSubmit,
  } = useQuickForm({
    createdFrom: "webform",
    singleDate,
    onSubmitSuccess: () => {
      if (setOpen) {
        setOpen(false);
      }
      window.open("/thank-you", "_blank");
    },
  });

  const minSelectableDate = useMemo(() => {
    return new Date();
  }, []);

  const { startDate, endDate } = dateRange;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        gridView
          ? "flex flex-col gap-3"
          : "grid md:grid-cols-5 items-center gap-3.5"
      } font-body px-4 bg-transparent max-md:divide-y divide-p1`}
    >
      {/* Full Name Field */}
      <div
        className={`flex items-center gap-2.5 lg:bg-white lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"
        }`}
      >
        <label className="text-secondary">
          <UserIcon />
        </label>
        <input
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Full Name"
          onChange={handleInputChange}
          value={formData.fullName}
          className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs">{errors.fullName}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div
        className={`flex items-center lg:bg-white gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"
        }`}
      >
        <label className="text-secondary">
          <CallIcon />
        </label>
        <div className="relative">
          <select
            aria-label="Country Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="ps-2 cursor-pointer appearance-none focus:outline-none text-secondarya"
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {country.code}
              </option>
            ))}
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown />
          </span>
        </div>
        <input
          type="tel"
          name="PhoneNumber"
          aria-label="Phone Number*"
          placeholder="Phone Number*"
          onChange={handleInputChange}
          value={formData.PhoneNumber}
          className="w-full placeholder:text-secondarya focus:outline-none text-secondarya no-spinner"
        />
        {errors.PhoneNumber && (
          <p className="text-red-500 text-xs">{errors.PhoneNumber}</p>
        )}
      </div>

      {/* Email Field */}
      <div
        className={`flex items-center lg:bg-white gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"
        }`}
      >
        <label className="text-secondary">
          <MailIcon />
        </label>
        <input
          type="email"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Email Id*"
          onChange={handleInputChange}
          value={formData.EmailId}
          className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
        />
        {errors.EmailId && (
          <p className="text-red-500 text-xs">{errors.EmailId}</p>
        )}
      </div>

      {/* Date Picker Field — logic & picker props untouched */}
      <div
        className={`flex items-center lg:bg-white gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"
        }`}
      >
        <label>
          <CalenderIcon />
        </label>

        {singleDate ? (
          // Single Date Picker
          <DatePicker
            selected={startDate}
            onChange={handleSingleDateChange}
            minDate={minSelectableDate}
            placeholderText="Event Date"
            dateFormat="dd/MM/yyyy"
            calendarClassName="!z-[99999]"
            popperClassName="!z-[99999]"
            className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya"
            wrapperClassName="w-full h-full !flex items-center"
          />
        ) : (
          // Date Range Picker
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            selectsStart
            selectsRange
            startDate={startDate}
            endDate={endDate}
            minDate={minSelectableDate}
            placeholderText="Check In - Check Out"
            dateFormat="dd/MM/yyyy"
            calendarClassName="!z-[99999]"
            popperClassName="!z-[99999]"
            className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya"
            wrapperClassName="w-full h-full !flex items-center"
          />
        )}

        {/* Error Display */}
        {singleDate
          ? errors.checkIn && (
              <p className="text-red-500 text-xs">{errors.checkIn}</p>
            )
          : (errors.checkIn || errors.checkOut) && (
              <p className="text-red-500 text-xs">
                {errors.checkIn || errors.checkOut}
              </p>
            )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        aria-label={singleDate ? "BOOK YOUR EVENT" : "Book Now"}
        className="bg-primary text-white w-full rounded-full text-lg py-3 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="border-t-2 border-dark w-6 h-6 rounded-full animate-spin mx-auto block" />
        ) : submitSuccess ? (
          "Thank You!"
        ) : (
          <span className="flex items-center justify-center gap-2.5">
            <BookingCalenderIcon />
            {singleDate ? "BOOK YOUR EVENT" : "Book Now"}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form2;

export const CalenderIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V11H2V19ZM19 4H17V3C17 2.4 16.6 2 16 2C15.4 2 15 2.4 15 3V4H9V3C9 2.4 8.6 2 8 2C7.4 2 7 2.4 7 3V4H5C3.3 4 2 5.3 2 7V9H22V7C22 5.3 20.7 4 19 4Z"
      fill="currentColor"
    />
  </svg>
);
