import API from "src/documentation/API";

export default async (req, res) => {
	res.status(200).json(API.utilities);
}