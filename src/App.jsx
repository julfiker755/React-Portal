import React, { useState } from 'react';
import {createPortal} from 'react-dom'
import Modal from './Modal/Modal';



const App = () => {
  const [show,setshow]=useState(false)
  return (
    <div className='container m-auto mt-3'>
       <div className='overflow-hidden'>
       <button onClick={()=>{
        setshow(true)
        document.body.classList.add('overflow-hidden')
       
       }} className='bg-[green] text-white py-2 px-3 rounded-md'>Show From</button>

        {show && createPortal(<Modal setshow={setshow}></Modal>,document.body)}
 
       </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex, magni facilis deserunt voluptas, quibusdam ea quam non assumenda qui soluta consequatur eveniet fuga ratione nemo earum similique iste, sunt voluptatum laudantium incidunt officiis. Possimus aliquam, reprehenderit officiis corporis iure odit amet eius doloribus autem repellendus temporibus voluptas quasi dignissimos nihil! Veniam officia ducimus tempora rerum repellat omnis itaque recusandae quibusdam voluptates nesciunt dignissimos debitis eaque molestiae deserunt dolorem error iusto nostrum a at voluptas quaerat illum, harum numquam? Culpa, necessitatibus? Sapiente repellat, similique eius ipsam dolorem explicabo pariatur fugiat consequatur facere sed quasi quisquam sint animi, voluptatibus necessitatibus. Dicta, perferendis laboriosam at incidunt nam eaque, cupiditate omnis eius repellat ab deserunt possimus rem accusamus excepturi. Animi facilis quia blanditiis deleniti dicta ipsum hic neque! Pariatur ipsa necessitatibus nam iure nihil, est sequi et, nemo ab architecto adipisci voluptatem neque, repellendus provident! Esse, voluptas. Commodi expedita rerum perspiciatis iusto magni distinctio molestias suscipit tempore maiores, veniam iure vitae dolor unde neque modi nemo adipisci inventore dolorum accusantium, architecto blanditiis dignissimos! Alias, reiciendis laboriosam ipsam enim saepe esse corporis a labore rerum dignissimos, adipisci quos, necessitatibus blanditiis deserunt? Eveniet, et qui. Molestias nisi doloribus voluptatibus facere? Rem officia dolorum sit nisi quia molestias odio odit, pariatur dolor harum, tempore dignissimos. Quidem, itaque. Iure soluta maxime tenetur harum maiores architecto voluptas! Recusandae delectus tenetur officia eveniet voluptates fuga est ipsa. Ex pariatur quisquam voluptatum molestias sit nostrum sint deserunt molestiae! Aliquid quis quam, magnam quos praesentium saepe, impedit cumque enim quisquam nesciunt fugiat minima eius nemo accusamus error dolorem numquam dolores rerum laboriosam, consequatur eaque suscipit beatae. Quam earum quae officiis iste eveniet temporibus voluptatibus. Corporis, hic? Dolores laudantium autem vel minus vero omnis accusamus eveniet voluptates quae consequuntur impedit deserunt asperiores, assumenda exercitationem reprehenderit incidunt quia perspiciatis odit quam voluptate officiis! Eaque harum nesciunt earum impedit illum? Soluta repellat consequuntur, perferendis eos facilis eaque nesciunt asperiores similique earum dignissimos atque velit officiis cupiditate. Deserunt, odit debitis. Obcaecati illo neque voluptatem ipsum incidunt, harum temporibus dolore doloribus veniam sunt provident, quas praesentium voluptatum inventore odit? Hic veniam, adipisci nesciunt facere quia accusamus quidem dolor quibusdam ex fugit, animi quo ea dolore qui quae molestiae vitae. Alias fugit ut ab tenetur illum laboriosam eaque perferendis quam aperiam repellat nemo asperiores quaerat autem officiis, praesentium molestiae porro reiciendis minus repellendus beatae voluptatibus vero! Earum reiciendis culpa vel corporis labore, molestias error natus eligendi quaerat doloremque molestiae sed maiores, quia reprehenderit voluptas animi in officia aperiam? Esse natus reprehenderit vero dolor dolores iure magnam facilis sint iusto rem iste nisi quas consectetur nesciunt itaque perspiciatis veniam pariatur neque, laborum porro praesentium. Itaque cum nemo distinctio rerum! Eos tempore provident in consequuntur itaque minima culpa expedita architecto quibusdam voluptatibus magnam inventore vitae veritatis fuga beatae, aliquam mollitia impedit molestias repudiandae voluptatem voluptas velit! Odit minima aliquid, reprehenderit, doloremque quasi consequatur incidunt beatae sequi adipisci cupiditate dolores omnis perferendis vitae commodi perspiciatis ab culpa ut dolorem est dolore. Repudiandae, dicta ab? Veritatis in excepturi et ducimus? Quibusdam!lorem500

        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, distinctio voluptates dicta incidunt molestiae perferendis magni iusto, culpa a provident quam eaque, recusandae architecto laudantium nihil unde. Non quisquam labore ducimus est inventore, earum cumque magnam rerum? Ea, quisquam porro et laborum deleniti atque corporis in optio doloremque dolorem saepe officia dicta ducimus natus minima, perspiciatis distinctio totam nam suscipit iste. Reprehenderit expedita obcaecati numquam excepturi magnam accusantium, corporis veritatis repudiandae omnis! Quod, consequuntur sed? Cupiditate natus impedit ipsum deserunt voluptatibus dicta ratione commodi reiciendis quidem! Nam reprehenderit itaque libero veniam quam aperiam optio maiores magni quo laborum dolores, commodi fugiat soluta perferendis nesciunt quae est quaerat voluptatum molestias voluptatibus obcaecati odio doloribus repellat quis! In ad quis adipisci ducimus consequuntur pariatur ipsum provident ut eaque laborum repudiandae fugit mollitia esse hic asperiores, eos est id sequi nemo enim soluta sed. Ad nesciunt accusantium tempora eaque ullam doloribus, maxime hic aut esse sapiente numquam blanditiis tempore quos a perferendis autem mollitia reprehenderit voluptas dolorum, doloremque vero nihil. Doloremque atque qui vero corporis at optio ullam eum explicabo reprehenderit eaque autem doloribus earum necessitatibus iste consequatur odit voluptate veritatis, unde ipsa rerum hic dolorum tenetur. Eius debitis, similique asperiores veritatis id iusto tenetur qui sequi dolorem mollitia animi odio dolorum, cumque ducimus placeat, voluptate culpa unde autem magnam cum suscipit rem dolores nihil quod. Iste sunt assumenda laborum, debitis laudantium asperiores accusantium consequuntur, ipsa hic perspiciatis maiores quasi eaque explicabo placeat voluptatem ab. Deleniti labore quisquam aliquam deserunt adipisci impedit cum. At aperiam sint quasi adipisci quis, nisi neque consequuntur deserunt quod, incidunt qui nobis, modi corporis tempore eum hic officia! Nostrum ducimus voluptas reprehenderit sequi nisi alias ratione quis, ipsa animi, molestias totam natus architecto ea in magnam corporis mollitia, tempore rerum ipsum non voluptatibus. Eius quisquam dolore consequatur aut, amet, iusto ipsam porro voluptatum a ab veniam dignissimos sunt laudantium provident sit odio voluptate debitis ullam quam perferendis soluta, tempora iste molestias ratione? Itaque officiis quaerat reprehenderit facilis architecto at id quo magnam corporis non amet, expedita delectus perspiciatis ad ut! Iusto qui a dolores? Placeat, asperiores illo explicabo voluptatem veniam quia? Accusantium obcaecati pariatur aliquam vero voluptatum porro, harum officia blanditiis, cumque mollitia consequuntur temporibus. Nisi fuga aspernatur enim omnis molestias exercitationem aut facere tempore, sequi provident, quia doloremque consequuntur ex. Maxime facilis corrupti qui vitae. Est possimus asperiores autem aliquam. A sit, saepe ex facere dignissimos totam laboriosam delectus reiciendis tempora! Praesentium itaque vitae fugiat veniam sunt corporis velit illo ipsa vero quas? Voluptates saepe ex mollitia ea minus distinctio alias! Quos quasi amet ipsa est similique porro sint temporibus, nobis mollitia sunt nemo in ipsum officia nesciunt reprehenderit, excepturi quidem pariatur. Laudantium illum, harum earum qui assumenda distinctio laboriosam consequuntur enim esse laborum, expedita eos dolor? Voluptate repellat perferendis aliquid enim ab debitis dolorum obcaecati facere totam ad. Numquam sapiente eius quae quasi laudantium nesciunt esse rem et, ducimus nihil id aut repellendus in optio quo maiores, repudiandae corrupti! Quibusdam maiores vitae impedit. Itaque, consequatur.</p>
    </div>
  );
};

export default App;