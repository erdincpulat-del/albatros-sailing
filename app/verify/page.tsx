import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    certificateId?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const id = params.certificateId?.trim();

  if (id) {
    redirect(`/verify/${encodeURIComponent(id)}`);
  }

  redirect("/registry");
}