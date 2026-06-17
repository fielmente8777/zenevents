import { DateRangeType, QuickFormData, QuickFormErrors, UseQuickFormProps } from "@/@types/quickForm.types";
import { contact } from "@/utils/constent";
import axios from "axios";
import { useCallback, useState } from "react";
import { getDateInputLimits } from "./getDateInputLimits";

const initialFormData: QuickFormData = {
  checkIn: "",
  checkOut: "",
  fullName: "",
  PhoneNumber: "",
  EmailId: "",
};

export const useQuickForm = ({
  createdFrom,
  singleDate = false,
  onSubmitSuccess,
  onValidationError,
}: UseQuickFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<QuickFormData>(initialFormData);
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });
  const [errors, setErrors] = useState<QuickFormErrors>({});
  const { min } = getDateInputLimits({ showPast: false });

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const validateForm = useCallback((): boolean => {
    const newErrors: QuickFormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10-15 digits";
      isValid = false;
    }

    if (singleDate) {
      // Single date validation
      if (!formData.checkIn.trim()) {
        newErrors.checkIn = "Date is required";
        isValid = false;
      }
    } else {
      // Date range validation
      if (!formData.checkIn.trim()) {
        newErrors.checkIn = "Check-in date is required";
        isValid = false;
      }

      if (!formData.checkOut.trim()) {
        newErrors.checkOut = "Check-out date is required";
        isValid = false;
      } else if (dateRange.startDate && dateRange.endDate && dateRange.startDate > dateRange.endDate) {
        newErrors.checkOut = "Check-out must be after check-in";
        isValid = false;
      }
    }

    setErrors(newErrors);
    
    if (!isValid && onValidationError) {
      onValidationError(newErrors);
    }
    
    return isValid;
  }, [formData, dateRange, singleDate, onValidationError]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name as keyof QuickFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }, [errors]);

  const handleDateChange = useCallback((update: [Date | null, Date | null]) => {
    const [start, end] = update;
    
    setDateRange({
      startDate: start,
      endDate: end,
    });

    const checkInString = start ? start.toISOString().split("T")[0] : "";
    
    // For single date mode, only set checkIn
    if (singleDate) {
      setFormData((prev) => ({
        ...prev,
        checkIn: checkInString,
      }));
      
      if (errors.checkIn) {
        setErrors((prev) => ({ ...prev, checkIn: "" }));
      }
    } else {
      // For range mode, set both dates
      const checkOutString = end ? end.toISOString().split("T")[0] : "";
      
      setFormData((prev) => ({
        ...prev,
        checkIn: checkInString,
        checkOut: checkOutString,
      }));

      // Clear date errors
      if (errors.checkIn || errors.checkOut) {
        setErrors((prev) => ({ ...prev, checkIn: "", checkOut: "" }));
      }
    }
  }, [singleDate, errors]);

  const handleSingleDateChange = useCallback((date: Date | null) => {
    setDateRange({
      startDate: date,
      endDate: null,
    });

    const dateString = date ? date.toISOString().split("T")[0] : "";
    
    setFormData((prev) => ({
      ...prev,
      checkIn: dateString,
    }));

    if (errors.checkIn) {
      setErrors((prev) => ({ ...prev, checkIn: "" }));
    }
  }, [errors]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setDateRange({ startDate: null, endDate: null });
    setErrors({});
    setSubmitSuccess(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Build description based on mode
      const description = singleDate
        ? `Event Date: ${formData.checkIn}`
        : `Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}`;

      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          email: formData.EmailId,
          Name: formData.fullName,
          Contact: formData.PhoneNumber,
          Description: description,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          created_from: createdFrom,
          source_url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        resetForm();
        setSubmitSuccess(true);
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    dateRange,
    isSubmitting,
    submitSuccess,
    minDate: min,
    handleInputChange,
    handleDateChange,
    handleSingleDateChange,
    handleSubmit,
    resetForm,
    setFieldValue: (field: keyof QuickFormData, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: "" }));
      }
    },
  };
};