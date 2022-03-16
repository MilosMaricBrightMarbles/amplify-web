import React, { useCallback } from "react";

import { useContactForm } from "../../hooks/use-contact-form";
import { blueGradientBackgroundStyles } from "../../util/constants";
import { Input } from "../input";

export const ContactForm = () => {
  const {
    name,
    email,
    submit,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage,
  } = useContactForm();

  const renderLink = useCallback(
    (text: string, link: string) => (
      <a
        href={link}
        target="_blank"
        rel="noopener"
        className="font-semibold text-amplify-dark-blue"
      >
        {text}
      </a>
    ),
    []
  );

  return (
    <div className="flex flex-col py-4 px-2 space-y-2 md:px-5">
      <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
        <div className="w-full">
          <Input value={name} placeholder="Name" onChange={setName} />
        </div>
        <div className="w-full">
          <Input value={email} placeholder="Email" onChange={setEmail} />
        </div>
      </div>
      <div>
        <Input value={subject} placeholder="Subject" onChange={setSubject} />
      </div>
      <div>
        <Input
          value={message}
          placeholder="Message"
          type="textarea"
          onChange={setMessage}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={submit}
          style={blueGradientBackgroundStyles}
          className="py-4 w-full text-sm font-extralight text-white rounded-lg"
        >
          Submit
        </button>
      </div>
      <div className="text-xs text-center text-gray-500">
        This site is protected by reCAPTCHA and the Google
        {renderLink(
          " Privacy Policy",
          "https://policies.google.com/privacy"
        )}{" "}
        and
        {renderLink(
          " Terms of Service",
          "https://policies.google.com/terms"
        )}{" "}
        apply.
      </div>
    </div>
  );
};
