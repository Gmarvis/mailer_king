import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader({ request }: LoaderFunctionArgs) {
  return {
    name: "sam gmarvis",
    age: 120,
    address: "Yaounde Cameroon",
  };
}

export default function Index() {
  const user = useLoaderData<typeof loader>();
  console.log(user);
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center ">
      <h3>Welcome to Mailer King</h3>
      <Button className="">Get Started</Button>
    </div>
  );
}
