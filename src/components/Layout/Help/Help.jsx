import React from "react";
import "./style.css";

import NavigationBlock from "../../misc/NavigationBLock/NavigationBlock";
import FAQ from "../../Blocks/FAQ/FAQ";
import FAQData from "./helpData/FAQData.json";
import LongRead from "../../Blocks/LongRead/LongRead";
import TermsData from "./helpData/TermsData.json";
import PrivacyData from "./helpData/PrivacyData.json";
import ReturnData from "./helpData/ReturnData.json";

const NAVIGATION = {
  terms: { id: "terms", name: TermsData.title },
  return: { id: "return", name: ReturnData.title },
  privacy: { id: "privacy", name: PrivacyData.title },
  faq: { id: "faq", name: FAQData.title },
};

const Help = () => {
  return (
    <div className="help">
      <NavigationBlock className="help__navigation" links={NAVIGATION} />
      <LongRead longreadData={TermsData} id={NAVIGATION.terms.id} />
      <LongRead longreadData={ReturnData} id={NAVIGATION.return.id} />
      <LongRead longreadData={PrivacyData} id={NAVIGATION.privacy.id} />
      <FAQ FAQData={FAQData} id={NAVIGATION.faq.id} />
    </div>
  );
};

export default Help;
