import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen">
      <div className="max-w-screen-lg bg-slate-300 mx-auto px-8">
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a header</h1>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nostrum placeat voluptatum, harum mollitia blanditiis reiciendis
          eligendi suscipit? Impedit magni quod excepturi non accusamus! Fugiat
          assumenda totam ut sed maxime! Quaerat, iure et nesciunt maxime
          dolorem pariatur sunt. Mollitia, eveniet alias possimus harum tempora,
          assumenda voluptatem provident optio porro est voluptatum? Et pariatur
          reprehenderit deserunt quam velit consequatur dolorum recusandae.
          Minus recusandae tenetur adipisci impedit fugiat nesciunt ipsam
          officia dolorum totam repudiandae error consequatur, quis temporibus,
          eaque, commodi eligendi consectetur rerum. Temporibus consequatur iure
          cumque. Ipsa ab veritatis aliquam ad! Iusto voluptas eveniet magnam a,
          est optio laborum non id tenetur deserunt similique repellat
          temporibus corporis explicabo accusantium illum eligendi commodi
          excepturi facilis totam. Hic est facere fugiat dolor modi. Aliquam
          ratione quae aut accusantium provident laborum ea, quas dolores vero
          inventore voluptatem hic fugit nam ex iste. Ducimus quaerat quos
          aperiam fugit, optio delectus sequi dolore doloribus laboriosam eius!
          Enim deleniti aliquid velit repellendus, dolorum atque repellat eius,
          debitis sapiente quidem doloribus saepe? Voluptatibus dignissimos enim
          quas repellendus, quia sit alias, quae hic, reprehenderit qui sapiente
          quibusdam animi vitae. Quibusdam dicta debitis fuga sed sequi animi
          sapiente quasi exercitationem, doloribus adipisci officia quas alias
          ea dolorum corrupti iure laboriosam illum cupiditate. Tempora
          blanditiis accusamus iusto animi, ipsa et repudiandae! Incidunt
          laudantium modi repellat, maxime doloribus ad sequi. Dolor natus
          cupiditate voluptatem ipsa illo pariatur perferendis quidem aspernatur
          totam dignissimos qui dicta necessitatibus iusto, illum modi quod
          commodi, odit nobis. Cum atque veniam rem! Laudantium dolor deserunt
          ullam sint suscipit corrupti hic harum culpa ea. Reprehenderit iusto
          non architecto pariatur minima incidunt illo doloremque possimus vel
          asperiores, quasi repellendus quas! Magnam deserunt maxime, fuga
          perspiciatis maiores suscipit temporibus, voluptatem ut illum aut
          mollitia quis sit assumenda quasi sed commodi laboriosam soluta
          aspernatur dolorem ipsa porro tenetur! Saepe amet doloribus similique!
        </p>
      </div>
    </div>
  );
}
