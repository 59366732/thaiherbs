/* eslint-disable no-unused-vars */
// @ts-nocheck
/* cSpell:disable */
import React, { useEffect, useState } from "react";
import "./QandAvisitors.css";
import { useCombobox } from "downshift";
import { Input } from "antd";

const QandAvisitors = () => {
	const [inputItems, setInputItems] = useState([]);
	const [users, setUsers] = useState([]);
	const [single, setSingleUsers] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data));
	}, []);

	console.log(users);
	return (
		<div
			data-layer="50622be3-525c-401b-a58d-b08973c47794"
			className="qandaforvisitors"
		>
			{" "}
			<div
				data-layer="02fe810a-2199-481e-bb09-314a56b99276"
				className="createQuestion"
			>
				{" "}
				<div
					data-layer="7bb4734f-4634-42ed-a546-e17904534f0f"
					className="createQButton"
				></div>
				<div
					data-layer="89ca29bf-65e8-43be-b04f-498af7033685"
					className="xf2410954"
				>
					ตั้งกระทู้ถาม
				</div>
			</div>
			<div data-layer="a14a8629-127d-4890-953f-80f2b7af1070" className="page">
				{" "}
				<div
					data-layer="0852d276-7315-4a34-ad15-f545d23b3f34"
					className="page02"
				></div>
				<div data-layer="b24e1318-0f87-4fc6-bb06-8f6362f228d5" className="x2">
					2
				</div>
				<div
					data-layer="4d15fb09-ed45-4d44-9952-9a6ac264b108"
					className="page01"
				></div>
				<div
					data-layer="97a523ec-d1f7-4b16-b730-8b833f98aea7"
					className="x1413fefbc"
				>
					1
				</div>
			</div>
			<svg
				data-layer="a290e963-a310-4f2e-9e61-18a64f5ff6fc"
				preserveAspectRatio="none"
				viewBox="0 -0.5 1406 1"
				className="line5"
			>
				<path d="M 0 0 L 1406 0" />
			</svg>
			<div
				data-layer="4e0eedd3-559d-4215-9fa3-9399c1001fdb"
				className="quesionT"
			>
				{" "}
				<div
					data-layer="49e1f35c-5abf-43ba-9719-46c614c55f0c"
					className="xf3048a42"
				>
					<span className="xf3048a42-0">
						0<br />
					</span>
					<span className="xf3048a42-2">โหวต</span>
				</div>
				<div
					data-layer="686728f3-bb22-4df2-be90-c24fbf461ac8"
					className="x21c87958"
				>
					<span className="x21c87958-0">
						0<br />
					</span>
					<span className="x21c87958-2">ตอบ</span>
				</div>
				<div
					data-layer="bec291a8-da73-4f44-a1ce-4988a0cacf98"
					className="x03dbcf75"
				>
					<span className="x03dbcf75-0">
						2<br />
					</span>
					<span className="x03dbcf75-2">ดู</span>
				</div>
				<div
					data-layer="57d7f83a-1d2a-4dd2-a686-5c67e5f916ea"
					className="x12bcfb796"
				>
					ตัวอย่างคำถามที่ 4
					.......................................................................................................................................
					<br />
					.........................................................................................
				</div>
				<div
					data-layer="36fac22c-419f-4fb3-bf75-4b2ce2aaebce"
					className="detailLog302d5f11"
				>
					<span className="detailLog302d5f11-0">ถามโดย : </span>
					<span className="detailLog302d5f11-9">project59</span>
					<span className="detailLog302d5f11-18"> เมื่อวันที่ </span>
					<span className="detailLog302d5f11-31">10/01/2563 </span>
					<span className="detailLog302d5f11-42">
						เวลา 11.43 น. ออนไลน์ล่าสุดเมื่อ :
					</span>
					<span className="detailLog302d5f11-76"> 5 </span>
					<span className="detailLog302d5f11-79">ชม.ที่แล้ว</span>
				</div>
			</div>
			<svg
				data-layer="26a3e529-0f0e-4989-850a-c7070529cfe0"
				preserveAspectRatio="none"
				viewBox="0 -0.5 1406 1"
				className="line4"
			>
				<path d="M 0 0 L 1406 0" />
			</svg>
			<div
				data-layer="9e6a7477-e461-4840-a227-348a05b128cf"
				className="quesionZ"
			>
				{" "}
				<div
					data-layer="424e45dc-6efd-4251-9612-2ecd1c4e021b"
					className="xa2a5632e"
				>
					<span className="xa2a5632e-0">
						0<br />
					</span>
					<span className="xa2a5632e-2">โหวต</span>
				</div>
				<div
					data-layer="0530ffee-aa8b-473b-834a-acd14efc4a84"
					className="xbc66c56e"
				>
					<span className="xbc66c56e-0">
						0<br />
					</span>
					<span className="xbc66c56e-2">ตอบ</span>
				</div>
				<div
					data-layer="9af0c687-5187-4bdd-afe8-47d2a4045ef3"
					className="x8b790f00"
				>
					<span className="x8b790f00-0">
						2<br />
					</span>
					<span className="x8b790f00-2">ดู</span>
				</div>
				<div
					data-layer="08ca60bd-5174-499c-8202-fde7e874d7aa"
					className="x10f10dee2"
				>
					ตัวอย่างคำถามที่ 3
					.......................................................................................................................................
					<br />
					.........................................................................................
				</div>
				<div
					data-layer="e699d719-8dd5-4e9b-88b1-84625a692cd1"
					className="detailLoge6b48472"
				>
					<span className="detailLoge6b48472-0">ถามโดย : </span>
					<span className="detailLoge6b48472-9">project59 </span>
					<span className="detailLoge6b48472-19">เมื่อวันที่</span>
					<span className="detailLoge6b48472-30"> 11/01/2563</span>
					<span className="detailLoge6b48472-41">
						{" "}
						เวลา 04.25 น. ออนไลน์ล่าสุดเมื่อ :
					</span>
					<span className="detailLoge6b48472-76"> 3 </span>
					<span className="detailLoge6b48472-79">ชม.ที่แล้ว</span>
				</div>
			</div>
			<svg
				data-layer="42755367-886b-4edb-a5e3-0abc149ef377"
				preserveAspectRatio="none"
				viewBox="0 -0.5 1406 1"
				className="line3"
			>
				<path d="M 0 0 L 1406 0" />
			</svg>
			<div
				data-layer="b5829e40-812c-435a-ad14-9aa47a26e6c6"
				className="quesionY"
			>
				{" "}
				<div
					data-layer="104834c8-52c6-4e08-bde5-6af56c96aa8b"
					className="x780363e4"
				>
					<span className="x780363e4-0">
						1<br />
					</span>
					<span className="x780363e4-2">โหวต</span>
				</div>
				<div
					data-layer="96bcb57d-66a3-4e92-9439-265a07b72b58"
					className="xaf624313"
				>
					<span className="xaf624313-0">
						0<br />
					</span>
					<span className="xaf624313-2">ตอบ</span>
				</div>
				<div
					data-layer="a92fd48f-36a0-4da0-a115-ed3674a2477e"
					className="xd88c504c"
				>
					<span className="xd88c504c-0">
						1<br />
					</span>
					<span className="xd88c504c-2">ดู</span>
				</div>
				<div
					data-layer="d7b7d988-24d9-45ca-8668-215e391818be"
					className="x1d6690666"
				>
					ตัวอย่างคำถามที่ 2
					.......................................................................................................................................
					<br />
					.........................................................................................
				</div>
				<div
					data-layer="57034652-fb2c-4ab3-82ce-34af8fed9c5f"
					className="detailLogae20c593"
				>
					<span className="detailLogae20c593-0">ถามโดย : </span>
					<span className="detailLogae20c593-9">project59</span>
					<span className="detailLogae20c593-18"> เมื่อวันที่</span>
					<span className="detailLogae20c593-30"> 12/01/2563</span>
					<span className="detailLogae20c593-41">
						{" "}
						เวลา 10.40 น. ออนไลน์ล่าสุดเมื่อ :
					</span>
					<span className="detailLogae20c593-76"> 2 </span>
					<span className="detailLogae20c593-79">ชม.ที่แล้ว</span>
				</div>
			</div>
			<svg
				data-layer="8d1690e8-3512-4e26-94dd-de8c3f2527ac"
				preserveAspectRatio="none"
				viewBox="0 -0.5 1406 1"
				className="line2"
			>
				<path d="M 0 0 L 1406 0" />
			</svg>
			<div
				data-layer="b0144443-0294-420d-ada1-5b31e5f867c9"
				className="quesionX"
			>
				{" "}
				<div
					data-layer="f0cf57dc-6647-4fc9-b3a0-f3fae626c7ef"
					className="x37c4f76b"
				>
					<span className="x37c4f76b-0">
						2<br />
					</span>
					<span className="x37c4f76b-2">โหวต</span>
				</div>
				<div
					data-layer="b9b8a50c-cbb3-47ba-ba67-bfd1e4d3a770"
					className="x889401a7"
				>
					<span className="x889401a7-0">
						1<br />
					</span>
					<span className="x889401a7-2">ตอบ</span>
				</div>
				<div
					data-layer="f570ba09-37cf-4a33-bf58-20dc6c3eee1c"
					className="xbccfad74"
				>
					3<br />
					ดู
				</div>
				<div data-layer="b4171e74-60fb-4fdb-8ecb-3497191dd32f" className="x1">
					ตัวอย่างคำถามที่ 1
					.......................................................................................................................................
					<br />
					.........................................................................................
				</div>
				<div
					data-layer="8fcceb87-eb4e-4fa0-9009-4f7a654cc50f"
					className="detailLog"
				>
					<span className="detailLog-0">ถามโดย : </span>
					<span className="detailLog-9">user Z</span>
					<span className="detailLog-15"> เมื่อวันที่</span>
					<span className="detailLog-27"> 13/01/2563</span>
					<span className="detailLog-38">
						{" "}
						เวลา 14.45 น. ออนไลน์ล่าสุดเมื่อ :
					</span>
					<span className="detailLog-73"> 2 </span>
					<span className="detailLog-76">ชม.ที่แล้ว</span>
				</div>
			</div>
			<svg
				data-layer="ee029a27-29ef-4066-bf9a-8a72aaffc36c"
				preserveAspectRatio="none"
				viewBox="0 -0.5 1406 1"
				className="line1"
			>
				<path d="M 0 0 L 1406 0" />
			</svg>
			<div
				data-layer="dae209c3-0a8d-4974-8472-1d4ab876eca0"
				className="serachModule"
			>
				{" "}
				<div
					data-layer="9eebda13-e0c2-40f8-85aa-c007f907bfbf"
					className="searchBox"
				></div>
				<div
					data-layer="7114cecb-f2bb-4ad1-9440-28a4a88ca3bd"
					className="search"
				>
					Search
				</div>
				<div
					data-layer="6fe7c33d-2b44-4afd-a154-9b27c0da898e"
					className="searchButton"
				></div>
				<div
					data-layer="bfcfb110-81db-4c6c-88bd-90ff84ac2387"
					className="xa3d74615"
				>
					ค้นหา
				</div>
				<div
					data-layer="63f57668-0e8f-4908-a6b0-6efcbda44ab2"
					className="x727fcd2b"
				>
					ค้นหาคำถามที่เกี่ยวข้อง -->
				</div>
			</div>
			<div
				data-layer="ebb1c10a-556b-44af-b696-9f17b31ebd3f"
				className="x36dcaeed"
			>
				คำถามล่าสุด
			</div>
			<div
				data-layer="fd91cff0-bd5f-4fef-bcb5-2f8d4f4293c8"
				className="x5bc713fe"
			>
				คำถามยอดนิยม
			</div>
			<div
				data-layer="5d4f2e16-d505-442a-9ff2-93e9501ec5ee"
				className="menuBar"
			></div>
		</div>
	);
};
export default QandAvisitors;
