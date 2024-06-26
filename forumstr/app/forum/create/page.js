"use client";
import { createForum } from "@/utils/nostr";

import PageHeader from "@/components/PageHeader";
import BackButton from "@/components/BackButton";
import ButtonSubmit from "@/components/ButtonSubmit";
import TextInput from "@/components/TextInput";

import { useRouter } from "next/navigation";

export default async function CreateForum() {
  const router = useRouter();

  const create = async (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const tag = event.target.elements.tag.value;
    const forumId = await createForum({ title, description, tag });
    router.push(`/forum/${forumId}`);
  };

  return (
    <div className="flex flex-col m-8">
      <div className="space-y-2 mb-4">
        <BackButton />
        <PageHeader copy="Create a Supplier" />
      </div>

      <form onSubmit={create}>
        <div className="space-y-4">
          <TextInput
            copy="Supplier Title"
            name="title"
            placeholder="Enter supplier title"
          />
          <TextInput
            copy="Supplier Address"
            name="description"
            placeholder="Enter your Supplier Address"
          />
          <TextInput
            copy="Supplier Phone Number"
            name="tag"
            placeholder="Enter Phone Number"
          />
          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}
