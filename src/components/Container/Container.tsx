
interface IContainer {
  children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
  return (
    <div className='mx-8 my-1'>
      {children}
    </div>
  )
}

export default Container
