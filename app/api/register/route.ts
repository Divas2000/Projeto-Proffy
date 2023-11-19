/* eslint-disable @typescript-eslint/no-explicit-any */
import { hash } from "bcryptjs";
import { NextRequest } from "next/server";
import prisma from "../prismaClient/prisma.server";
import { registerSchema, RegisterData } from "@/register/registerSchema";
import { sendResponse } from "@/helpers/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterData;
    const { name, lastName, email, password } = registerSchema.parse(body);

    const hashedPassword = await hash(password, 12);

    const response = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: hashedPassword,
        image: null,
      },
      select: {
        name: true,
        lastName: true,
        email: true,
      },
    });

    return sendResponse(201, response);
  } catch (error: any) {
    if (error.code === "P2002") {
      return sendResponse(409, "E-mail já cadastrado");
    }

    return sendResponse(
      500,
      "Ops, problemas técnicos! Tente novamente em alguns instantes",
    );
  }
}
