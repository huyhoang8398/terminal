import Head from 'next/head'
import React from 'react'
import config from '../../config.json'
import { Input } from '../components/input'
import { useHistory } from '../components/history/hook'
import { History } from '../components/history/History'
import { banner, smallbanner } from '../utils/bin'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  let isDesktop
  if (typeof window !== 'undefined') {
    isDesktop = parseInt(fullConfig.theme.screens.md, 10) < window.innerWidth
  }

  const containerRef = React.useRef(null)
  const { history, command, lastCommandIndex, setCommand, setHistory, clearHistory, setLastCommandIndex } = useHistory(
    []
  )

  const init = React.useCallback(() => setHistory(isDesktop ? banner() : smallbanner()), [])

  React.useEffect(() => {
    init()
  }, [init])

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView()
      inputRef.current.focus({ preventScroll: true })
    }
  }, [history])

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto overflow-x-none h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  )
}

export default IndexPage