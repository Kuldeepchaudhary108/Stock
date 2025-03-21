import * as cheerio from "cheerio";
import axios from "axios";

const uri = "https://groww.in";

export const getStocksGroww = async (req, res) => {
  try {
    let companies = [];
    let url = `${uri}/stocks/filter?page=0&size=${
      Math.floor(Math.random() * 10) + 50
    }&sortType=ASC`;

    await axios
      .get(url, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        const htmlString = response.data;

        const $ = cheerio.load(htmlString);

        // Iterate over each table row (`<tr>`) and extract the data.
        $("tr").each((index, element) => {
          const companyName = $(element).find(".st76SymbolName").text().trim();
          const marketPrice = $(element).find(".st76CurrVal").text().trim();
          const priceChange = $(element).find(".bodySmallHeavy").text().trim();
          const closePrice = $(element)
            .find(".contentPrimary.st76Pad16")
            .first()
            .text()
            .trim();
          const marketCap = $(element)
            .find(".contentPrimary.st76Pad16")
            .last()
            .text()
            .trim();
          const companyLink = $(element).find("a").attr("href");

          // Ensure that all necessary fields are found before pushing to the result array
          if (
            companyName &&
            marketPrice &&
            priceChange &&
            closePrice &&
            marketCap
          ) {
            companies.push({
              name: companyName,
              marketPrice: marketPrice,
              priceChange: priceChange,
              closePrice: closePrice,
              marketCap: marketCap,
              companyLink: companyLink,
            });
          }
        });

        return res.status(200).send(companies);
      });
  } catch (error) {
    return res.status(500).json({ msg: "error getting stocks data" });
  }
};

export const getStockDataGroww = async (req, res) => {
  const { link } = req.body;
  try {
    let url = `${uri}${link}`;

    await axios
      .get(url, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        const htmlString = response.data;

        const $ = cheerio.load(htmlString);
        let info = {};

        $("noscript").each((index1, element1) => {
          if (index1 != 0) {
            const $2 = cheerio.load(element1.children[0].data);
            $2("img").each((idx, ele) => {
              info.logo = ele.attribs.src;
            });
          }
        });

        info.companyName = $("body").find(".lpu38Head").text().trim();
        info.marketPrice = $("body").find(".lpu38San").next().text();
        info.priceChange = $("body").find(".bodySmallHeavy").text().trim();
        info.closePrice = $("body")
          .find(".contentPrimary.st76Pad16")
          .first()
          .text()
          .trim();
        info.marketCap = $("body")
          .find(".contentPrimary.st76Pad16")
          .last()
          .text()
          .trim();
        info.companyLink = $("body").find("a").attr("href");

        return res.status(200).json(info);
      });
  } catch (error) {
    return res.status(500).json({ msg: "error getting stocks data" });
  }
};
