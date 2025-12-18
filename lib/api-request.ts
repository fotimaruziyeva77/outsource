const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const API_SERVICE = {
	blog: `${baseUrl}/blogs/`,
	contact: `${baseUrl}/contacts/`,
	successnumber: `${baseUrl}/successnumbers/`,
	feedback: `${baseUrl}/clients/`,
	edu: `${baseUrl}/educations/`,
	category: `${baseUrl}/specialcategories/`,
	service: `${baseUrl}/specialservices/`,
	faqs: `${baseUrl}/faqs/`,
	slider:`${baseUrl}/slider/`
}
