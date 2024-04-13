"use server";

import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const baseUrl = "http://o-complex.com:1337";

export async function getReviews() {
  const url = `${baseUrl}/reviews`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data ${response.status}`);
  }

  const reviews = await response.json();

  return reviews;
}

export async function getProducts(page = 1, page_size = 6) {
  const params = {
    page: page,
    page_size: page_size,
  };

  const searchParams = new URLSearchParams(params).toString();

  const url = `${baseUrl}/products?${searchParams}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data ${response.status}`);
  }

  const products = await response.json();

  return products;
}

export async function createOrder(prevState, formData) {
  const url = `${baseUrl}/order`;

  const phone = formData.get("phone");
  const preparePhone = phone.replace(/\D+/g, "");

  const isValidPhone = Boolean(preparePhone.length === 11);

  if (!isValidPhone) {
    return {
      success: false,
      errors: { phone: "Введите корректный номер телефона" },
    };
  }

  const data = {
    phone: preparePhone,
    cart: JSON.parse(formData.get("cart")),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
