// @ts-nocheck
/* eslint-disable no-unused-vars */
/* cSpell:disable */
import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore, generateUserDocument } from "../firebase/firebase";
import "../components/Styles.css";
import "./HomeUsers.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const HomeUsers = () => {
	const user = useContext(UserContext);
	const [photoURL, setPhotoURL] = useState(user.photoURL);
	const [firstName, setFirstname] = useState(user.firstName);
	const [lastName, setLastname] = useState(user.lastName);
	const [displayName, setDisplayName] = useState(user.displayName);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
	const [error, setError] = useState(null);
	console.log(user);

	const updateUserProfile = (event) => {
		event.preventDefault();
		generateUserDocument(user, { displayName });
		firestore
			.collection("users")
			.doc(user.uid)
			.update({ ...user, firstName, lastName, displayName, email, password });
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;
		if (name === "userEmail") {
			setEmail(value);
		} else if (name === "userPassword") {
			setPassword(value);
		} else if (name === "displayName") {
			setDisplayName(value);
		} else if (name === "firstName") {
			setFirstname(value);
		} else if (name === "lastName") {
			setLastname(value);
		}
	};
	const classes = useStyles();
	return (
		<div className="container">
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
					{error !== null && <div>{error}</div>}
					<div>
						<meta charSet="utf-8" />
						<title>Profile</title>
						<link rel="stylesheet" href="profile.css" />
						<div
							data-layer="c6fedf19-fd32-4468-9538-50b104c78fa8"
							className="profile"
						>
							{" "}
							<div
								data-layer="fad4bf91-c555-429c-b846-9aabcb04f6d3"
								className="mainGrid"
							>
								{" "}
								<svg
									data-layer="2c60a0c8-6950-41b2-a229-cd4d9b47da44"
									preserveAspectRatio="none"
									viewBox="0 -0.5 1920.75 1"
									className="horizonLine"
								>
									<path d="M 0 0 L 1920.75 0" />
								</svg>
								<svg
									data-layer="251ebcc1-3858-49a4-a35f-07ff4e88f226"
									preserveAspectRatio="none"
									viewBox="-0.5 0 1 1966"
									className="verticalLine1"
								>
									<path d="M 0 0 L 0 1966" />
								</svg>
								<svg
									data-layer="97881d92-dbdb-4599-93fc-181c1569dfc8"
									preserveAspectRatio="none"
									viewBox="-0.5 0 1 1966"
									className="verticalLine2"
								>
									<path d="M 0 0 L 0 1966" />
								</svg>
							</div>
							<div
								data-layer="3107abad-90df-4624-8e9d-c3e861dffcf7"
								className="rightPanel"
							>
								{" "}
								<div
									data-layer="da200a7a-fddc-41bd-8599-075b0e0ab901"
									className="userlevel"
								>
									ระดับของผู้ใช้งาน : …………
								</div>
							</div>
							<div
								data-layer="7ab540dc-3c7c-408c-ae62-b752890ad52b"
								className="centerPanel"
							>
								{" "}
								<div
									data-layer="d63ae531-7410-409c-bb28-5e28d3735a8e"
									className="addAndEditList"
								>
									สมุนไพรที่ได้ทำการเพิ่มหรือแก้ไข
								</div>
								<div
									data-layer="73b1508a-f6f0-4221-8256-9351b295b5fc"
									className="description"
								>
									<span className="description-0">
										คำอธิบาย
										<br />
									</span>
									<span className="description-9">
										{" "}
										- ………………………………………………………………………………………………………………………………..
										<br /> - ……………………………………………………………………………………………………………………………..
										<br /> - …………………………………………………………………...
									</span>
								</div>
								<div
									data-layer="d9e8bf9f-9030-4fb7-b121-dc455c42fa9e"
									className="coverPicture"
								/>
								<div
									data-layer="f58d0810-280b-4469-9217-d1ab47d92113"
									className="username"
								>
									project59
								</div>
								<svg
									data-layer="d1d8ce7e-004a-464a-8f29-0b3f0e5d03d6"
									preserveAspectRatio="none"
									viewBox="-3.75 -3.75 223.5 223.5"
									className="userprofilepicture"
								>
									<path d="M 108 0 C 167.6467437744141 0 216 48.35325241088867 216 108 C 216 167.6467437744141 167.6467437744141 216 108 216 C 48.35325241088867 216 0 167.6467437744141 0 108 C 0 48.35325241088867 48.35325241088867 0 108 0 Z" />
								</svg>
								<div
									data-layer="d2a3da00-810d-465f-bdc9-5c6e34c4f533"
									className="profilepicture"
								/>
							</div>
							<div
								data-layer="da6a0ca6-1f0c-4d2b-bfcd-e40804e9036e"
								className="leftPanel"
							>
								{" "}
								<div
									data-layer="35d66f11-40c4-4f62-9ceb-b6557ae9e66b"
									className="about"
								/>
								<div
									data-layer="8f8bcfaa-ea83-485b-b0d8-5efeba11656a"
									className="x71224f41"
								>
									ออกจากระบบ
								</div>
								<div
									data-layer="52b1509b-2da1-493e-9105-bf9801ac7ee3"
									className="x740193a1"
								>
									เกี่ยวกับ
								</div>
								<div
									data-layer="f2eed171-458b-4bcf-b9c4-9d32a402c391"
									className="logoutIcon"
								/>
								<div
									data-layer="690a5160-be06-477c-9db2-a0c12538c4e1"
									className="x"
								>
									ถาม-ตอบ
								</div>
								<div
									data-layer="d13c8cd6-d030-42b9-96b7-04f1fecb832b"
									className="qanda"
								/>
								<div
									data-layer="4e7d32e6-4b9f-4bff-9875-b19d430d6eaf"
									className="xd5da732d"
								>
									การตั้งค่า
								</div>
								<div
									data-layer="701f2807-923f-47a1-8bbe-7afeba2083da"
									className="settingIcon"
								/>
								<div
									data-layer="afc8012e-43d8-4dc1-870b-ff358758fe3a"
									className="x44b7a881"
								>
									ประวัติกิจกรรม
								</div>
								<div
									data-layer="39487126-803c-4073-b600-f40f6754465c"
									className="historyIcon"
								/>
								<div
									data-layer="5d7a7fec-3202-434d-8a11-c64ccc90ee86"
									className="x3974c9ff"
								>
									หน้าหลัก
								</div>
								<div
									data-layer="e320aa1c-12b2-43f8-b467-b37be80622bc"
									className="homeIcon"
								/>
								<div
									data-layer="538f4ef1-8982-4c2a-ab16-d05c960a475d"
									className="displayname"
								>
									project59
								</div>
								<div
									data-layer="93d140f1-b256-446e-8ad5-94d7f204b553"
									className="userIcon"
								/>
							</div>
							<div
								data-layer="e5bcc2d9-7512-4a26-971d-12c2d67500b9"
								className="search"
							>
								{" "}
								<div
									data-layer="68089b6f-27ad-4737-92aa-5deb877eb15c"
									className="magnufy"
								/>
								<div
									data-layer="1b972e26-80f1-4397-9e68-1837d8c1f488"
									className="searchBox"
								/>
							</div>
							<div
								data-layer="ba054bce-e4af-4eb3-90d3-faaa0b0bcd6c"
								className="x03ab5bbc"
							>
								เว็บชุมชนสมุนไพรไทย
							</div>
							<div
								data-layer="91700f25-4524-4cb8-b26a-3e170e323221"
								className="herb5"
							>
								{" "}
								<div
									data-layer="f3847f16-cba5-4be3-8aa2-5c9b1475a237"
									className="herb2Rectfe21c4a2"
								/>
								<div
									data-layer="09e9e15b-bda6-4947-8b07-8c6d4dd57ef0"
									className="x4330e3a0"
								>
									กัญชง
								</div>
								<div
									data-layer="cfbaf9e2-7a53-4b41-92b0-48e694234a29"
									className="herbDetail0ad6503a"
								>
									ชื่อสามัญ : Hemp
									<br />
									ชื่อวิทยาศาสตร์ : Cannabis sativa L. subsp. Sativa
									<br />
									เพิ่มเมื่อวันที่ 27/05/2563 เวลา 10.53 น.
									<br />
									โดย project59
								</div>
								<div
									data-layer="e1a79322-1f88-4332-adf2-60db6fc738e5"
									className="herb2Picturee3c6e0ec"
								/>
								<div
									data-layer="2fc76213-b4e0-4c20-bcc4-2f507ec5c205"
									className="xbe7751b0"
								>
									ตรวจสอบแล้ว
								</div>
								<div
									data-layer="d66086ab-43f3-4d77-b6c5-a025f8dd6867"
									className="detailCompnent639badcd"
								>
									{" "}
									<div
										data-layer="02bd30b0-8078-45b7-91c7-a81d4c884232"
										className="rectangle8d5585876"
									/>
									<svg
										data-layer="1770d1d5-5830-47e8-ba7e-0b07ca8030d7"
										preserveAspectRatio="none"
										viewBox="-0.5 0 1 29"
										className="line6c8dc222c"
									>
										<path d="M 0 0 L 0 29" />
									</svg>
								</div>
								<div
									data-layer="b7a6d103-8278-4c0d-bf7d-dfc7498b35c4"
									className="x75"
								>
									75 โหวต
								</div>
								<div
									data-layer="0c77e0f4-34d0-4f80-b3f8-6b56afad611b"
									className="x00c7f3717"
								>
									0 ความคิดเห็น
								</div>
							</div>
							<div
								data-layer="26edb2ab-fabb-4d99-be3a-ba7a0cf6a021"
								className="herb4"
							>
								{" "}
								<div
									data-layer="f7b43978-5150-4e0a-9ca6-fb383b7a1b72"
									className="herb2Rect"
								/>
								<div
									data-layer="e3110834-1a28-41e6-ae4f-072f2ba56fc5"
									className="detailCompnentbd2baa2b"
								>
									{" "}
									<div
										data-layer="2c839907-4930-4f89-b39f-ab31d7117989"
										className="rectangle83e4e9b87"
									/>
									<svg
										data-layer="3e1598d3-f470-4306-876a-7247d31adeb4"
										preserveAspectRatio="none"
										viewBox="-0.5 0 1 29"
										className="line6c4036aa5"
									>
										<path d="M 0 0 L 0 29" />
									</svg>
								</div>
								<div
									data-layer="d9f46ff9-f166-470e-92c7-250e9285db49"
									className="x7a1a6c2f"
								>
									เถาคันแดง
								</div>
								<div
									data-layer="fc50be6c-e6e4-4ec5-8d43-edb33e4fb2e7"
									className="herbDetaild7f6573e"
								>
									ชื่อสามัญ : Virginia creeper, True Virginia creeper, Victoria
									creeper, <br /> Five-leaved ivy, Five-finger
									<br />
									ชื่อวิทยาศาสตร์ : Helicteres isora L.
									<br />
									เพิ่มเมื่อวันที่ 28/05/2563 เวลา 10.53 น.
									<br />
									โดย project59
								</div>
								<div
									data-layer="17aa389d-473c-42ed-8199-9c8f4d846b00"
									className="herb2Picture"
								/>
								<div
									data-layer="87031447-31a3-426e-af04-ace115463ac9"
									className="x05858849"
								>
									ตรวจสอบแล้ว
								</div>
								<div
									data-layer="698548fa-d9b0-46d9-bca9-54d141a166c1"
									className="x80"
								>
									80 โหวต
								</div>
								<div
									data-layer="53c0422f-ef6c-48d3-94b1-347b0fdd8b4c"
									className="x1"
								>
									1 ความคิดเห็น
								</div>
							</div>
							<div
								data-layer="d6785fe6-1f65-47dd-b9a8-8b2073ef1e93"
								className="herb3"
							>
								{" "}
								<div
									data-layer="0730fcfd-b15d-43ce-a9cb-2113b07655bb"
									className="herb1Rect0d7cc7e6"
								/>
								<div
									data-layer="3caf3a15-0a09-4a64-91e1-a3dc7340eb52"
									className="herb1Picture9f891dc3"
								/>
								<div
									data-layer="64806545-750f-4623-88ec-b8dddf122217"
									className="x13d1d855"
								>
									มะขามป้อม
								</div>
								<div
									data-layer="8e024c4b-dc02-490d-aac4-9458f9987bab"
									className="herbDetail"
								>
									ชื่อสามัญ : Indian gooseberry
									<br />
									ชื่อวิทยาศาสตร์ : Phyllanthus emblica L.
									<br />
									เพิ่มเมื่อวันที่ 01/06/2563 เวลา 10.53 น.
									<br />
									โดย project59
								</div>
								<div
									data-layer="eac33c08-e6a7-4cba-ab17-f7eecd84ecae"
									className="xa1270784"
								>
									ตรวจสอบแล้ว
								</div>
								<div
									data-layer="c7af654c-8303-4da5-ac99-18bff976f7de"
									className="detailCompnent0ea9d847"
								>
									{" "}
									<div
										data-layer="648b6426-f629-4b8e-8924-f7170effc051"
										className="rectangle8bebc3f9c"
									/>
									<svg
										data-layer="20180c92-0d02-4020-9465-d07d85e4d78e"
										preserveAspectRatio="none"
										viewBox="-0.5 0 1 29"
										className="line6294cc552"
									>
										<path d="M 0 0 L 0 29" />
									</svg>
								</div>
								<div
									data-layer="51830a12-3057-4311-adc2-33d540e1cb16"
									className="x55"
								>
									55 โหวต
								</div>
								<div
									data-layer="fe4eb353-5321-45b9-abac-b79dc601a825"
									className="x2"
								>
									2 ความคิดเห็น
								</div>
							</div>
							<div
								data-layer="573c5594-9106-4ab7-be64-1ba35a83af7a"
								className="herb2"
							>
								{" "}
								<div
									data-layer="74f42402-cf4c-4999-9afe-72584624d16a"
									className="herb1Rect7951e08d"
								/>
								<div
									data-layer="03b88161-8ce8-43ca-8132-a8d225983386"
									className="x6a41863c"
								>
									ปอกะบิด
								</div>
								<div
									data-layer="fa20a92b-2622-490f-bc98-050157038d05"
									className="herbsDetail96fc1ca5"
								>
									ชื่อสามัญ : East indian screw tree
									<br />
									ชื่อวิทยาศาสตร์ : Helicteres isora L.
									<br />
									เพิ่มเมื่อวันที่ 28/06/2563 เวลา 10.53 น.
									<br />
									โดย project59
								</div>
								<div
									data-layer="11fb6cef-39d8-4330-8bb0-1dcbddd3b39a"
									className="herbs2Picture"
								/>
								<div
									data-layer="94b0dfb5-3c8b-42a2-8cea-75ea53fe614a"
									className="detailCompnent188388fa"
								>
									{" "}
									<div
										data-layer="67a77e30-8423-40b8-9b53-bac3b358823f"
										className="rectangle85e46a376"
									/>
									<svg
										data-layer="6c812f73-7032-44d5-9454-274ab1e2c76d"
										preserveAspectRatio="none"
										viewBox="-0.5 0 1 29"
										className="line6f0a21601"
									>
										<path d="M 0 0 L 0 29" />
									</svg>
								</div>
								<div
									data-layer="1c132080-eb1f-45e9-87e6-79da17269bcd"
									className="x05d2be9d1"
								>
									0 ความคิดเห็น
								</div>
								<div
									data-layer="ac459c8c-4f26-4c4c-b39a-bfbd8e2e77c8"
									className="x043379d7f"
								>
									0 โหวต
								</div>
								<div
									data-layer="d203b584-ec1f-4c3a-9a88-8435e333b132"
									className="xd6117bd5"
								>
									กำลังรอการตรวจสอบ
								</div>
							</div>
							<div
								data-layer="b2621f0d-33b6-4867-8644-1a22951f4341"
								className="herb1"
							>
								{" "}
								<div
									data-layer="54e8c457-4c7e-46cd-83b3-47f0cba6cd68"
									className="herb1Rect"
								/>
								<div
									data-layer="7b9df52a-0ece-49b9-9428-c03cb376f778"
									className="detailCompnent"
								>
									{" "}
									<div
										data-layer="27dc35f0-8d64-4eac-ad60-aec6d2fa94be"
										className="rectangle8"
									/>
									<svg
										data-layer="3da6ad8d-0051-4cfc-8c5a-18735e22275d"
										preserveAspectRatio="none"
										viewBox="-0.5 0 1 29"
										className="line6"
									>
										<path d="M 0 0 L 0 29" />
									</svg>
								</div>
								<div
									data-layer="48a73df5-c643-45bb-a757-d1d498716f59"
									className="herb1Picture"
								/>
								<div
									data-layer="c0f76547-6204-4a0e-90cf-78b2e2776dbb"
									className="x89abfffe"
								>
									ลูกใต้ใบ
								</div>
								<div
									data-layer="5d17b6ca-3815-4c4c-922c-c69dbfc2fa60"
									className="herbsDetail"
								>
									ชื่อสามัญ : Egg woman, Tamalaki, Hazardana, Stonebreaker,
									Seed-
									<br /> under-leaf
									<br />
									ชื่อวิทยาศาสตร์ : Phyllanthus amarus Schumach. &amp; Thonn.
									<br />
									เพิ่มเมื่อวันที่ 28/06/2563 เวลา 10.53 น.
									<br />
									โดย project59
								</div>
								<div
									data-layer="2bfeed25-0c62-4b5a-9cf5-b64f727fc421"
									className="x0f2ce668e"
								>
									0 ความคิดเห็น
								</div>
								<div
									data-layer="d6324cb8-8223-4c58-af91-528ff66ec14c"
									className="x0"
								>
									0 โหวต
								</div>
								<div
									data-layer="e62fd282-c926-46e7-944c-8ad715f4973e"
									className="x5a1b3530"
								>
									กำลังรอการตรวจสอบ
								</div>
							</div>
						</div>
					</div>
					); } });
				</div>
			</Container>
		</div>
	);
};

export default HomeUsers;
