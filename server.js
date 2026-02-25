import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

// 환경변수 로드
dotenv.config();

const app = express();

// cors 설정
app.use(cors());

// JSON 설정
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// 서버 실행
app.listen(8080, () => {
  console.log("server on", process.env.CLIENT_URL);
});
