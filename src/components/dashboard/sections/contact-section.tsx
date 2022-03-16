import React from "react";

import { ContactForm } from "../contact-form";

const mail = "support@amplifyforhealthcare.com";
export const ContactSection = () => (
  <div className="flex flex-col space-y-3 md:flex-row md:space-y-0">
    <div className="flex flex-col justify-between py-2 w-full">
      <div className="flex flex-col mb-10 space-y-3">
        <div className="text-xl font-semibold md:text-2xl">
          Have some questions?
        </div>
        <div className="text-sm font-extralight text-gray-700 md:text-base">
          Feel free to contact us and we will get back to you as soon as we can!
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-1">
          <div className="text-sm text-gray-700 md:text-base">Phone</div>
          <div className="text-sm font-medium md:text-base">
            +1 (0) 123 4567
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-sm text-gray-700 md:text-base">Email</div>
          <div className="text-sm font-medium hover:text-amplify-dark-blue md:text-base">
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-white rounded-lg shadow-lg">
      <ContactForm />
    </div>
  </div>
);
