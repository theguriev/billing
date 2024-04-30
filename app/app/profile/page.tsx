import { cookies } from "next/headers";

import { Separator } from "@/components/ui/separator";
import { api } from "@/lib/openapi/apiClient";

import ProfileForm from "./components/Form";

const Profile = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await api.authorization("/", "get", { authorization: true });

  let name = "";
  let email = "";

  if (response.status === 200) {
    const json = await response.json();
    name = json.name;
    email = json.email;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className="lg:max-w-2xl">
        <ProfileForm name={name} email={email} />
      </div>
    </div>
  );
};

export default Profile;
