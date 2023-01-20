// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const sample = await axios(
    "https://www.kamis.or.kr/service/price/xml.do?action=yearlySalesList&p_yyyy=2022&p_itemcategorycode=100&p_itemcode=111&p_kindcode=01&p_graderank=1&p_countycode=1101&p_convert_kg_yn=N&p_cert_key=111&p_cert_id=222&p_returntype=json"
  );
  console.log(sample.data);
  res.status(200).json({ data: sample.data });
}
