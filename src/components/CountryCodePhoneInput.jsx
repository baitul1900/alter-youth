"use client";

import React, { useEffect, useState } from "react";
import { useField, ErrorMessage } from "formik";
import TextError from "./TextError"; // Ensure this path is correct
const countryCodes = [
  { code: "+93", name: "AF" },
  { code: "+1", name: "DZ" },
  { code: "+1", name: "AS" },
  { code: "+376", name: "AD" },
  { code: "+244", name: "AO" },
  { code: "+1", name: "AG" },
  { code: "+54", name: "AR" },
  { code: "+374", name: "AM" },
  { code: "+61", name: "AU" },
  { code: "+43", name: "AT" },
  { code: "+994", name: "AZ" },
  { code: "+1", name: "BS" },
  { code: "+973", name: "BH" },
  { code: "+880", name: "BD" },
  { code: "+1", name: "BB" },
  { code: "+375", name: "BY" },
  { code: "+32", name: "BE" },
  { code: "+501", name: "BZ" },
  { code: "+229", name: "BJ" },
  { code: "+1", name: "BM" },
  { code: "+975", name: "BT" },
  { code: "+591", name: "BO" },
  { code: "+387", name: "BA" },
  { code: "+267", name: "BW" },
  { code: "+55", name: "BR" },
  { code: "+1", name: "VG" },
  { code: "+673", name: "BN" },
  { code: "+359", name: "BG" },
  { code: "+226", name: "BF" },
  { code: "+257", name: "BI" },
  { code: "+855", name: "KH" },
  { code: "+237", name: "CM" },
  { code: "+1", name: "CA" },
  { code: "+238", name: "CV" },
  { code: "+1", name: "KY" },
  { code: "+236", name: "CF" },
  { code: "+56", name: "CL" },
  { code: "+86", name: "CN" },
  { code: "+61", name: "CX" },
  { code: "+61", name: "CC" },
  { code: "+57", name: "CO" },
  { code: "+269", name: "KM" },
  { code: "+242", name: "CG" },
  { code: "+243", name: "CD" },
  { code: "+682", name: "CK" },
  { code: "+506", name: "CR" },
  { code: "+385", name: "HR" },
  { code: "+53", name: "CU" },
  { code: "+357", name: "CY" },
  { code: "+420", name: "CZ" },
  { code: "+45", name: "DK" },
  { code: "+253", name: "DJ" },
  { code: "+1", name: "DM" },
  { code: "+1", name: "DO" },
  { code: "+593", name: "EC" },
  { code: "+20", name: "EG" },
  { code: "+503", name: "SV" },
  { code: "+240", name: "GQ" },
  { code: "+291", name: "ER" },
  { code: "+372", name: "EE" },
  { code: "+251", name: "ET" },
  { code: "+500", name: "FK" },
  { code: "+298", name: "FO" },
  { code: "+1", name: "FJ" },
  { code: "+358", name: "FI" },
  { code: "+33", name: "FR" },
  { code: "+594", name: "GF" },
  { code: "+689", name: "PF" },
  { code: "+241", name: "GA" },
  { code: "+220", name: "GM" },
  { code: "+995", name: "GE" },
  { code: "+49", name: "DE" },
  { code: "+233", name: "GH" },
  { code: "+350", name: "GI" },
  { code: "+30", name: "GR" },
  { code: "+299", name: "GL" },
  { code: "+1", name: "GD" },
  { code: "+590", name: "GP" },
  { code: "+502", name: "GT" },
  { code: "+224", name: "GN" },
  { code: "+245", name: "GW" },
  { code: "+592", name: "GY" },
  { code: "+509", name: "HT" },
  { code: "+504", name: "HN" },
  { code: "+36", name: "HU" },
  { code: "+354", name: "IS" },
  { code: "+91", name: "IN" },
  { code: "+62", name: "ID" },
  { code: "+98", name: "IR" },
  { code: "+964", name: "IQ" },
  { code: "+353", name: "IE" },
  { code: "+972", name: "IL" },
  { code: "+39", name: "IT" },
  { code: "+225", name: "CI" },
  { code: "+1", name: "JM" },
  { code: "+81", name: "JP" },
  { code: "+962", name: "JO" },
  { code: "+7", name: "KZ" },
  { code: "+254", name: "KE" },
  { code: "+686", name: "KI" },
  { code: "+965", name: "KW" },
  { code: "+996", name: "KG" },
  { code: "+856", name: "LA" },
  { code: "+371", name: "LV" },
  { code: "+961", name: "LB" },
  { code: "+266", name: "LS" },
  { code: "+231", name: "LR" },
  { code: "+218", name: "LY" },
  { code: "+423", name: "LI" },
  { code: "+370", name: "LT" },
  { code: "+352", name: "LU" },
  { code: "+853", name: "MO" },
  { code: "+389", name: "MK" },
  { code: "+261", name: "MG" },
  { code: "+265", name: "MW" },
  { code: "+60", name: "MY" },
  { code: "+960", name: "MV" },
  { code: "+223", name: "ML" },
  { code: "+356", name: "MT" },
  { code: "+692", name: "FM" },
  { code: "+596", name: "MQ" },
  { code: "+222", name: "MR" },
  { code: "+230", name: "MU" },
  { code: "+262", name: "YT" },
  { code: "+52", name: "MX" },
  { code: "+691", name: "FM" },
  { code: "+373", name: "MD" },
  { code: "+377", name: "MC" },
  { code: "+976", name: "MN" },
  { code: "+382", name: "ME" },
  { code: "+1", name: "MS" },
  { code: "+212", name: "MA" },
  { code: "+258", name: "MZ" },
  { code: "+95", name: "MM" },
  { code: "+264", name: "NA" },
  { code: "+674", name: "NR" },
  { code: "+977", name: "NP" },
  { code: "+31", name: "NL" },
  { code: "+599", name: "CW" },
  { code: "+687", name: "NC" },
  { code: "+64", name: "NZ" },
  { code: "+505", name: "NI" },
  { code: "+227", name: "NE" },
  { code: "+234", name: "NG" },
  { code: "+683", name: "NU" },
  { code: "+850", name: "KP" },
  { code: "+47", name: "NO" },
  { code: "+968", name: "OM" },
  { code: "+92", name: "PK" },
  { code: "+680", name: "PW" },
  { code: "+970", name: "PS" },
  { code: "+507", name: "PA" },
  { code: "+675", name: "PG" },
  { code: "+595", name: "PY" },
  { code: "+51", name: "PE" },
  { code: "+63", name: "PH" },
  { code: "+48", name: "PL" },
  { code: "+351", name: "PT" },
  { code: "+1", name: "PR" },
  { code: "+974", name: "QA" },
  { code: "+40", name: "RO" },
  { code: "+7", name: "RU" },
  { code: "+250", name: "RW" },
  { code: "+590", name: "BL" },
  { code: "+1", name: "SH" },
  { code: "+1", name: "KN" },
  { code: "+1", name: "LC" },
  { code: "+1", name: "MF" },
  { code: "+1", name: "PM" },
  { code: "+685", name: "WS" },
  { code: "+378", name: "SM" },
  { code: "+239", name: "ST" },
  { code: "+966", name: "KSA" },
  { code: "+221", name: "SN" },
  { code: "+1", name: "RS" },
  { code: "+248", name: "SC" },
  { code: "+232", name: "SL" },
  { code: "+65", name: "SG" },
  { code: "+421", name: "SK" },
  { code: "+386", name: "SI" },
  { code: "+677", name: "SB" },
  { code: "+252", name: "SO" },
  { code: "+27", name: "ZA" },
  { code: "+82", name: "KR" },
  { code: "+34", name: "ES" },
  { code: "+94", name: "LK" },
  { code: "+249", name: "SD" },
  { code: "+597", name: "SR" },
  { code: "+268", name: "SZ" },
  { code: "+46", name: "SE" },
  { code: "+41", name: "CH" },
  { code: "+963", name: "SY" },
  { code: "+886", name: "TW" },
  { code: "+992", name: "TJ" },
  { code: "+255", name: "TZ" },
  { code: "+66", name: "TH" },
  { code: "+228", name: "TG" },
  { code: "+690", name: "TK" },
  { code: "+676", name: "TO" },
  { code: "+1", name: "TT" },
  { code: "+216", name: "TN" },
  { code: "+90", name: "TR" },
  { code: "+993", name: "TM" },
  { code: "+1", name: "TC" },
  { code: "+688", name: "TV" },
  { code: "+256", name: "UG" },
  { code: "+380", name: "UA" },
  { code: "+971", name: "AE" },
  { code: "+44", name: "GB" },
  { code: "+1", name: "US" },
  { code: "+598", name: "UY" },
  { code: "+998", name: "UZ" },
  { code: "+678", name: "VU" },
  { code: "+58", name: "VE" },
  { code: "+84", name: "VN" },
  { code: "+1", name: "VI" },
  { code: "+967", name: "YE" },
  { code: "+260", name: "ZM" },
  { code: "+263", name: "ZW" },
];

const CountryCodePhoneInput = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  const [selectedCode, setSelectedCode] = useState("+966"); // Default to the first country code
  const [isValid, setIsValid] = useState(true); // State to track phone validity

  // Handle the change of country code
  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setSelectedCode(newCode);

    // When the country code is changed, update the phone number by replacing the old code with the new one
    if (field.value) {
      setValue(newCode + field.value.replace(/^\+\d+\s*/, "")); // Replace any previous code
    } else {
      setValue(""); // Clear the value if it's empty
    }

    // Reset validity
    setIsValid(true);
  };

  // Handle the phone number input change
  const handlePhoneChange = (e) => {
    let phoneValue = e.target.value;

    // Prevent any modification of the country code by stripping it off the phone number
    if (phoneValue.startsWith(selectedCode)) {
      phoneValue = phoneValue.replace(selectedCode, ""); // Remove the country code if present
    }

    // Set the value as the country code + phone number
    setValue(selectedCode + phoneValue);

    // Validate phone number
    validatePhoneNumber(selectedCode + phoneValue);
  };

  // Function to validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    const parsedPhoneNumber = parsePhoneNumberFromString(
      phoneNumber,
      selectedCode.replace("+", "")
    );

    if (parsedPhoneNumber) {
      setIsValid(parsedPhoneNumber.isValid()); // Set validity based on parsing
    } else {
      setIsValid(false); // If parsing fails, mark it as invalid
    }
  };

  // Revalidate phone number when the country code or phone number changes
  useEffect(() => {
    if (field.value) {
      validatePhoneNumber(field.value);
    }
  }, [selectedCode, field.value]);

  return (
    <div className="relative">
      {/* Label */}
      <label
        htmlFor={name}
        className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 ${
          meta.touched && meta.error ? "text-red-500" : "text-gray-700"
        }`}
      >
        {label}
      </label>

      {/* Container for Dropdown and Input */}
      <div
        className={`flex items-center border rounded ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-200"
        } focus:ring-1 focus:ring-[#73C002] focus:border-[#73C002] `}
      >
        {/* Dropdown Field for Country Code */}
        <select
          value={selectedCode}
          onChange={handleCodeChange}
          className={`w-28 h-[44px] text-[#0a0a0b] sm:text-sm py-3 px-2
            ${meta.touched && meta.error ? "border-red-500" : "border-gray-200"}
            focus:outline-none placeholder-gray-500 text-sm bg-gray-100 rounded rounded-r-none `}
        >
          {countryCodes.map((country, index) => (
            <option
              key={`${country.code}-${country.name}-${index}`}
              value={country.code}
              disabled={country?.code != "+966"}
            >
              {`${country.name} (${country.code})`}
            </option>
          ))}
        </select>

        {/* Input Field for Phone Number */}
        <input
          type="tel"
          {...field}
          {...props}
          className={`w-full  bg-white text-[#0a0a0b] shadow-sm sm:text-sm py-3 px-5 hover:border-[#A9A9A9]
            ${meta.touched && meta.error ? "border-red-500" : "border-gray-200"}
            ${!isValid ? "border-red-500" : ""}
            focus:outline-none placeholder-gray-500 text-sm  rounded rounded-l-none`}
          placeholder="Phone Number"
          onChange={handlePhoneChange}
        />
      </div>

      {/* Error Message */}
      <ErrorMessage name={name} component={TextError} />
      {!isValid && (
        <p className="text-red-500 text-xs mt-1">
          Please enter a valid phone number.
        </p>
      )}
    </div>
  );
};

export default CountryCodePhoneInput;
