function ProjectComponents() {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <div className="mt-4 flex items-center justify-center gap-8">
        <div className="h-1 w-60 bg-myDarkBlue"></div>
        <h1 className="font-bold text-2xl">Projekt</h1>
        <div className="h-1 w-60 bg-myDarkBlue"></div>
      </div>
      <div className="flex  w-[1200px] h-[400px]">
        <div className="w-[600px] h-[400px] flex flex-col justify-between">
          <div>
            <h1 className="text-center">project namn</h1>
            <p>
              about project. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Harum tempore vero adipisci eos laboriosam velit quis veniam
              accusamus id, iure omnis aperiam rem delectus. Exercitationem
              magni rem perferendis libero ab!
            </p>
          </div>
          <div className="h-20">tekniker</div>
        </div>
        <div className="w-[600px] h-[400px] bg-myBlue rounded-2xl ">
          <div className="img-container">
            <img
              className="mx-[30px] my-[30px] w-[540px]"
              src="/public/assets/spotify-preveiw.png"
              alt=""
            />
          </div>
          <div>
            <div>git link</div>
            <div>demo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponents;

<div className="mt-4 flex items-center justify-center gap-8">
  <div className="h-1 w-60 bg-myDarkBlue"></div>
  <h1 className="font-bold text-2xl">Projekt</h1>
  <div className="h-1 w-60 bg-myDarkBlue"></div>
</div>;
