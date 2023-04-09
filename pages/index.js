import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const menu = [
    {
      title: "Çorbalar",
      detail: [
        {
          title: "Mercimek Çorbası",
          price: "",
        },
        {
          title: "Kelle Paça Çorbası",
          price: "",
        },
        {
          title: "İşkembe Çorbası",
          price: "",
        },
        {
          title: "Tavuk Çorbası",
          price: "",
        },
      ],
    },
    {
      title: "Kebaplar",
      detail: [
        {
          title: "Adana",
          price: "",
        },
        {
          title: "Urfa",
          price: "",
        },
        {
          title: "Kuzu Şiş",
          price: "",
        },
        {
          title: "Ciğer Şiş",
          price: "",
        },
        {
          title: "Kuzu Pirzola",
          price: "",
        },
        {
          title: "Karışık Kebap",
          price: "",
        },
        {
          title: "Patlıcanlı Kebap",
          price: "",
        },
        {
          title: "Domatesli Kebap",
          price: "",
        },
        {
          title: "Vali Kebabı",
          price: "",
        },
        {
          title: "Antrikot",
          price: "",
        },
        {
          title: "Beyti",
          price: "",
        },
        {
          title: "Köfte",
          price: "",
        },
        {
          title: "Tavuk Şiş",
          price: "",
        },
        {
          title: "Tavuk Pirzola",
          price: "",
        },
        {
          title: "Kanat",
          price: "",
        },
      ],
    },
    {
      title: "Lahmacun & Pideler",
      detail: [
        {
          title: "Lahmacun",
          price: "",
        },
        {
          title: "Kuşbaşılı Pide",
          price: "",
        },
        {
          title: "Kıymalı Pide",
          price: "",
        },
        {
          title: "Kaşarlı Pide",
          price: "",
        },
        {
          title: "Karışık Pide",
          price: "",
        },
        {
          title: "Tahinli Pide",
          price: "",
        },
        {
          title: "Kuşbaşılı Kaşarlı Pide",
          price: "",
        },
        {
          title: "Kıymalı Kaşarlı Pide",
          price: "",
        },
        {
          title: "Kaşarlı Sucuklu Pide",
          price: "",
        },
        {
          title: "Kıymalı Yumurtalı Pide",
          price: "",
        },
        {
          title: "Otlu Peynirli Pide",
          price: "",
        },
      ],
    },
    {
      title: "Pizzalar",
      detail: [
        {
          title: "Margherita Pizza",
          price: "",
        },
        {
          title: "Karışık Pizza",
          price: "",
        },
        {
          title: "Tavuklu Pizza",
          price: "",
        },
        {
          title: "Mantarlı Pizza",
          price: "",
        },
      ],
    },
    {
      title: "Ekstralar",
      detail: [
        {
          title: "Salata",
          price: "",
        },
        {
          title: "Yoğurt",
          price: "",
        },
        {
          title: "Cacık",
          price: "",
        },
        {
          title: "Çiğköfte",
          price: "",
        },
        {
          title: "Künefe",
          price: "",
        },
      ],
    },
    {
      title: "Soğuk İçecekler",
      detail: [
        {
          title: "Coca Cola",
          price: "",
        },
        {
          title: "Fanta",
          price: "",
        },
        {
          title: "Sprite",
          price: "",
        },
        {
          title: "Fuse Tea",
          price: "",
        },
        {
          title: "Limonata",
          price: "",
        },
        {
          title: "Ayran",
          price: "",
        },
        {
          title: "Şalgam",
          price: "",
        },
        {
          title: "Soda",
          price: "",
        },
        {
          title: "Meyveli Soda",
          price: "",
        },
        {
          title: "Taze Sıkma Portakal Suyu",
          price: "",
        },
        {
          title: "Taze Sıkma Nar Suyu",
          price: "",
        },
      ],
    },
    {
      title: "Sıcak İçecekler",
      detail: [
        {
          title: "Çay",
          price: "",
        },
        {
          title: "Türk Kahvesi",
          price: "",
        },
        {
          title: "Nescafe",
          price: "",
        },
      ],
    },
  ];
  return (
    <div>
      <Head>
        <title>Hanci Et</title>
      </Head>
      <main className={styles.generalContainer}>
        <div
          className={styles.section1}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            alt="Mountains"
            src="/fırın.jpg"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: -1 }}
          />
          <h3 className={styles.title}>HANCI ET</h3>
          <div className={styles.section_content}>
            <h1>HANCI ET</h1>
            <h4>Ege&apos; yi ete doyurmaya geldik </h4>
          </div>
        </div>
        <div
          className={styles.section3}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            alt="Mountains"
            src="/et.jpg"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: -1 }}
          />
          <h1>MENU</h1>
          <div className={styles.section3_content}>
            <div className={styles.section3_content_acordion}>
              {menu.map((el) => (
                <>
                  <Accordion
                    expanded={expanded === el.title}
                    onChange={handleChange(el.title)}
                    sx={{
                      maxWidth: "93.75rem",
                      width: "100%",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0, fontSize: 20 }}
                      >
                        {el.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#e1e1e1",
                        overflowY: "scroll",
                        maxHeight: "9.375em",
                      }}
                    >
                      {el.detail.map((x) => (
                        <>
                          <Typography>{x.title}</Typography>
                          <Divider
                            sx={{
                              margin: "4px 0",
                            }}
                          />
                        </>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.section4_content}>
            <h1>İLETİŞİM</h1>
            <div className={styles.section4_info}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Link
                  href="https://instagram.com/hanciet?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  className={styles.links}
                >
                  <InstagramIcon />
                  INSTAGRAM
                </Link>
                <span className={styles.phone}>
                  <LocalPhoneIcon />
                  +90 (530) 769 4872
                </span>
              </div>
              <span style={{ fontSize: "20px" }}>KONUM</span>
              <Link
                className={styles.links}
                href="https://www.google.com.tr/maps/place/HANCI+ET+MANGAL/@36.8399347,28.77157,15z/data=!4m2!3m1!1s0x0:0xd5764f7e026bd3fc?sa=X&hl=tr-tr&ved=2ahUKEwjA5u61vp3-AhU2RvEDHYe9A18Q_BJ6BAhjEAg"
                target="_blank"
              >
                <MapIcon />
                Fethiye İzmir karayolu üzeri shell petrol yanı 199/5
              </Link>
            </div>
          </div>
          <div
            className={styles.section5}
            style={{
              width: "60%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              alt="Mountains"
              src="/ızgara.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
