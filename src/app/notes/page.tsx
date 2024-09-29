import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('../../components/mdeditor/MDXEditor'), { ssr: false })

const markdown = `
1. hi
`

export default function Home() {
  return (
    <>
    <div style={{border: '1px solid black'}}>
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
    </>
  )
}