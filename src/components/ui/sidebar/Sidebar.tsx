import { currentRole, currentUser } from "@/lib/useAuth"
import SidebarContent from "./SidebarContent"

const Sidebar = async () => {

  
  const user = await currentUser()
  const role = await currentRole()
  return (
    <SidebarContent user={user} role={role} />

  )
}

export default Sidebar