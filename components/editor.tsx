import type { FC } from "react"
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { SimpleMDEReactProps } from "react-simplemde-editor"

const SimpleMdeEditor = dynamic(
	() => import("react-simplemde-editor"),
	{ ssr: false }
);

const Editor: FC = (props: SimpleMDEReactProps) => {
  console.log(props)
    return (
      <SimpleMdeEditor {...props} />
    )
  }

export default Editor
