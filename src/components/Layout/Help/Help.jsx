import React from "react";

import FAQ from "../../Blocks/FAQ/FAQ";
import FAQData from "./helpData/FAQData.json";
import LongRead from "../../Blocks/LongRead/LongRead";
import TermsData from "./helpData/TermsData.json";
import PrivacyData from "./helpData/PrivacyData.json";
import ReturnData from "./helpData/ReturnData.json";

const Help = () => {
  return (
    <div className="help">
      <FAQ FAQData={FAQData} />
      <LongRead longreadData={TermsData} />
      <LongRead longreadData={PrivacyData} />
      <LongRead longreadData={ReturnData} />
    </div>
  );
};

export default Help;
