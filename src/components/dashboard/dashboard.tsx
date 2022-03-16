import React from "react";

import { useCategories } from "../../hooks/use-categories";
import { ContentContainer } from "../content-container";
import { ChangeInTrendsSection } from "./sections/change-in-trends-section";
import { ContactSection } from "./sections/contact-section";
import { PurposeSection } from "./sections/purpose-section";
import { TopCategoriesSection } from "./sections/top-categories-section";
import { TopTermsSection } from "./sections/top-terms-section";

export const Dashboard = () => {
  useCategories();

  return (
    <ContentContainer
      className="py-5 bg-gray-50"
      innerContainerClassName="flex flex-col space-y-12 lg:space-y-20"
    >
      <TopCategoriesSection />
      <ChangeInTrendsSection />
      <TopTermsSection />
      <PurposeSection />
      <ContactSection />
    </ContentContainer>
  );
};
