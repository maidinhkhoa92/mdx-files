import { useRouter } from 'next/router'
import Button from "../components/button"

const Login = () => {
  const router = useRouter()
  return (
    <div className="container mx-auto pt-10">
      <div className="flex justify-center">
        <div className="box-border h-64 w-64 p-4 border-4 flex justify-center items-center">
          <Button text="Login" onClick={() => router.push("/admin/mdx-files")} />
        </div>
      </div>
    </div>
  )
}

export default Login