
interface IContainer {
  children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
  return (
    <div className='mx-10 my-5'>
      {children}
    </div>
  )
}

export default Container
