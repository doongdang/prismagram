import multer from "multer";
const upload = multer({ dest: "uploads/" }); // muler는 옵션객체를 허용하는데 그중에서 dest는 파일이 저장될 위치를 알려줌

export const uploadMiddleware = upload.single("file");
export const uploadController = (req, res) => {
  const { file } = req;
  console.log(file);
  res.end();
};
// upload.single => single()안의 field 인자에 명시된 이름의 단수파일을 전달받는다. 이파일은 req.file에 저장;
