import { City } from '@/components/City';
import { ContactForm } from '@/components/ContactForm';
import { CuriosFact } from '@/components/CuriosFact';
import { Navbar } from '@/components/Navbar';
import { Project } from '@/components/Project';
import { Skills } from '@/components/Skills';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Vehicle } from '@/components/Vehicle';
import { Waves } from '@/components/Waves';
import { AngularSVG, AwsSVG, Css3SVG, Html5SVG, JavaScriptSVG, MongoDBSVG, NextJsSVG, NodejsSVG, ReactSVG, SocketIOSVG, TailwindSVG, TypeScriptSVG, WebRTCSVG } from '@/utils/IconsSvgs';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeES() {
  return (
    <>
      
      <Navbar lenguage={"hi"}/>
      <Vehicle lenguage={"hi"}/>
      <main className='overflow-x-hidden z-20'>
          
          <div className='gradient-background relative'>

            <StarsBackground>

                {/* simulate the navbar height */}
                <div id="part4" className='h-16'></div>

                {/* presentation section */}
                <div className='md:px-[15%] lg:px-[20%] flex flex-col md:flex-row justify-center items-center h-screen px-[10%]'>
                    <div className='mb-10 md:w-[50%]'>
                            <h1 className='text-white font-bold text-[1.6rem] um:text-[2.2rem] xl:text-[3rem]'>Andres Bonilla</h1>
                            <div className='flex text-white'>
                                <TypingAnimation stringList={['सॉफ्टवेयर डेवलपर', 'उद्यमी', 'खिलाड़ी']}
                                                 wrapper="h2"/>
                            </div>
                            
                    </div>
                    <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                            <Image 
                                src={require("@/assets/yo-en-el-tesla.png")}
                                alt='टेस्ला रोडस्टर में एंड्रेस बोनिला'
                                width={350} 
                                height={350}
                                className='absolute w-full floating'
                            />
                    </div>
                </div>

                {/* about me */}
                <div className='px-[15%]'>
                    <div className='flex w-full justify-center items-center' id='about'>
                        <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>मेरे बारे में</h2>
                    </div>
                    <p className='text-white text-left text-xl leading-10'>नमस्ते! 👋आप कैसे हैं? मेरा नाम एन्ड्रेस बोनिला है। मैं एक छात्र, सॉफ्टवेयर डेवलपर और उद्यमी हूं। मुझे तकनीकी परियोजनाएँ बनाना पसंद है; मैं इसे तब से कर रहा हूं जब मैं 16 साल का था, जब मैंने फैनसिव नाम से अपनी पहली तकनीकी कंपनी शुरू की थी। मैं विज्ञान, प्रौद्योगिकी, खेल, कार, संगीत से संबंधित हर चीज का आनंद लेता हूं, लेकिन सबसे ऊपर, आइसक्रीम! 😄
                    </p>
                </div>

                <CuriosFact text={"हम समुद्र तल से 384,400 किमी ऊपर हैं; इस ऊंचाई पर चंद्रमा पृथ्वी की परिक्रमा कर रहा है। थोड़ा इंतजार करें और आप इसे जरूर देखेंगे."}/>
                <div className='lg:h-[35rem] flex relative h-[20rem]'>
                  <Image 
                        src={require("@/assets/moon-icon.png")}
                        alt="चाँद की तस्वीर"
                        className='absolute moon'
                      />
                </div>


                {/* my business */}
                <div className='w-full'>
                  
                    <div className='flex w-full justify-center items-center' id="business-part">
                        <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>मेरा व्यापार</h2>
                    </div>

                    <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%]'>

                        <div className='lg:w-[40%] lg:mx-0 md:mx-[25%] flex items-center justify-center h-[35rem] relative w-auto mx-[13%]'>
                            <Image 
                              src={require("@/assets/simpliterms-planet.png")}
                              alt="simpliterm's planet"
                              className='absolute w-auto floating'
                            />
                        </div>

                        <div className='lg:w-[60%] lg:ml-12'>

                            <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mt-[5rem] mb-[2rem]'>Simpliterms</h3>

                            <p className='text-white text-left text-xl leading-10 mx-[13%] lg:mx-0 mb-8'>
                               क्या आपने कभी गोपनीयता नीति और/या उपयोग की शर्तों को पढ़े बिना स्वीकार करें पर क्लिक किया है क्योंकि वे बहुत लंबी हैं और उन्हें समझना मुश्किल है? सिंपलीटर्म्स एक Google एक्सटेंशन है जो एक क्लिक से नीतियों का सारांश प्रस्तुत करता है ताकि आपको उन्हें आँख बंद करके दोबारा स्वीकार न करना पड़े।
                            </p>

                            <div className='px-[13%] lg:px-0'>
                              <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>और देखें</Link>
                            </div>

                        </div>
                      
                    </div>                

                </div>

                {/* my skills */}
                <div className='lg:px-[30%] px-[13%] mb-14'>
                    <div className='flex w-full justify-center items-center'>
                        <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>कौशल</h2>
                    </div>
                    <Skills />
                </div>

                <CuriosFact text={"अभी हम समुद्र तल से 400 किलोमीटर ऊपर हैं। इसी ऊंचाई पर अंतरराष्ट्रीय अंतरिक्ष स्टेशन (आईएसएस) है।"}/>
                <div id="part3" className='flex'>
                  <Image 
                        src={require("@/assets/space-station-icon.png")}
                        alt="International Space Station"
                        className='international-space-station'
                      />
                </div>


                {/* my projects */}
                <div id='projects'>
                    <div className='flex w-full justify-center items-center'>
                        <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>मेरी परियोजनाएं</h2>
                    </div>

                    <Project name={"YourDreamCar"} 
                            desc={"YourDreamCar is a web page that I designed for a company that I developed with my best friend David. Which offers wrapping services, window tinting and more. #YourDreamCar"} 
                            link={"https://www.yourdreamcar.ca/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/YourDreamCar"} 
                            imgUrl={"yourdreamcar-interface.png"}
                            imgStack={"yourdreamcar-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<Html5SVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <TailwindSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <NextJsSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>
                                      ]}
                    />
                    <Project name={"Fansive"} 
                            desc={"Fansive is a startup created by me which is a platform for exclusive content. This app has all the necessary tools for content creators to offer the best content to their subscribers, such as live streaming, stories, group chats, private chats, post, file storage and much more."} 
                            link={"https://fansive.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code"} 
                            imgUrl={"fansive-interface.png"}
                            imgStack={"fansive-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<AngularSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <WebRTCSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <SocketIOSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <TypeScriptSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <NodejsSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <MongoDBSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                      ]}
                    />
                    <Project name={"Virtual Board"} 
                            desc={"Virtual Board is a web application made without using libraries that simulates a classroom board, so you can draw, erase, create figures, drag and drop, rotate and many other things. This app use trigonometry and algebra to solve some of the functionalities in the virtual board."} 
                            link={"https://super-virtual-board.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Virtual-Board"} 
                            imgUrl={"virtualboard-interface.jpg"}
                            imgStack={"virtual-board-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<ReactSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <Html5SVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <Css3SVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>
                                      ]}
                    />
                </div>

                <CuriosFact text={"वर्तमान में हम 30,000 मीटर की ऊंचाई पर हैं, वह ऊंचाई जिस पर आज अधिकांश वाणिज्यिक विमान आमतौर पर उड़ान भरते हैं।"}/>
                <div id="part2" className='flex'>
                  <Image 
                        src={require("@/assets/vehicle7.png")}
                        alt="boeing 737"
                        className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
                      />
                  <Image 
                        src={require("@/assets/vehicle8.png")}
                        alt="सैन्य हवाई जहाज"
                        className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
                      />
                  <Image 
                        src={require("@/assets/airplane3-icon.png")}
                        alt="निजी जेट"
                        className='w-[7rem] h-[7rem] lg:w-[15rem] lg:h-[10rem] plane3'
                      />
                </div>
                
                
                <div className='h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[60rem] 2xl:h-[80rem] 3xl:h-[100rem]'></div>


              </StarsBackground>

              <City />

              <Waves />

          </div>


          <div className='sea overflow-hidden'>

              <div className='flex h-[10rem]'>
                  <Image 
                        src={require("@/assets/fish-group-1-icon.png")}
                        alt="समूह में पीली मछली"
                        className='w-[10rem] h-[10rem] fish-group'
                      />
              </div>

              {/* my projects */}
              <div>
                    <CuriosFact text={"हम उथले पानी में हैं, इस गहराई पर आप सैल्मन, रीफ मछली और अन्य जैसी मछलियाँ पा सकते हैं।"}/>
                    <div className='flex'>
                        <Image 
                              src={require("@/assets/fish-group-1-icon.png")}
                              alt="समूह में पीली मछली"
                              className='w-[6rem] h-[6rem] fish-group delay-300'
                            />
                        <Image 
                              src={require("@/assets/fish-group-2-icon.png")}
                              alt="सैल्मन मछली तैराकी"
                              className='w-[8rem] h-[8rem] fish-group-2'
                        />
                        <Image 
                              src={require("@/assets/fish-group-3-icon.png")}
                              alt="शार्क तैराकी"
                              className='w-[30rem] h-[10rem] fish-group-3'
                        />
                    </div>
                    <Project name={"FileBox"} 
                            desc={"fileBox is an application created by me very similar to dropbox, google drive or similar, in which anyone can upload files, download them, create folders and many other functions."} 
                            link={"https://filebox.netlify.app/#/login"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/backend-fileBox"} 
                            imgUrl={"filebox-interface.png"}
                            imgStack={"filebox-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<AngularSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <MongoDBSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <AwsSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <NodejsSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>
                                      ]}
                    />
                    <Project name={"Geekepedia"} 
                            desc={"Geekipedia is a blog where you can learn how some of the most famous algorithms in computer science work, such as BFS (Breath First Search), QuickSort, Binary Search and many more."} 
                            link={"https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/Geekipedia/home/Geekipedia"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Geekipedia"} 
                            imgUrl={"geekipedia-interface.png"}
                            imgStack={"geekipedia-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<AngularSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <Html5SVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                       <Css3SVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>
                                      ]}
                    />
                    <Project name={"thePokedex"} 
                            desc={"thePokedex is an app with light and dark theme in which you can find and search information of all existing pokemon and you can use it on android and ios devices."} 
                            link={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"} 
                            imgUrl={"pokedex-interface.png"}
                            imgStack={"pokedex-stack.png"}
                            buttonText={"View Project"}
                            iconList={[<ReactSVG className={"w-[2rem] lg:w-[3rem] mr-3"}/>,
                                      ]}
                    />
                    <div className='flex h-[18rem]'>
                        <Image 
                              src={require("@/assets/tentaculos.gif")}
                              alt="kraken tentaculus"
                              className='w-[30rem] h-[30rem] rotate-[75deg] -translate-x-20'
                            />
                    </div>
                </div>

                <div className='px-[13%]'>
                    <div className='flex w-full justify-center items-center' id='contact'>
                        <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>संपर्क</h2>
                    </div>
                    <ContactForm lenguage={"hi"} />
                </div>

                <CuriosFact text={"इस समय हम 3,800 मीटर गहराई पर हैं, जहां टाइटैनिक के अवशेष स्थित हैं और मेरी वेबसाइट के अंत में हैं।"}/>

                <div className='titanic mt-20'>
                      <div className='flex justify-center items-center mb-24'>
                          <Link href={"https://www.instagram.com/__andrec__/"} 
                                target='_blank'
                                title='instagram link'>
                            <FontAwesomeIcon icon={faInstagram} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                          </Link>
                          <Link href={"https://twitter.com/AndresB64566284"} 
                                target='_blank'
                                title='twitter link'>
                            <FontAwesomeIcon icon={faTwitter} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                          </Link>
                          <Link href={"https://www.linkedin.com/in/andres-bonilla-685983189/"} 
                                target='_blank'
                                title='linkedin link'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] mr-12' />
                          </Link>
                          <Link href={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A"} 
                                target='_blank'
                                title='github link'>
                            <FontAwesomeIcon icon={faGithub} className='text-white md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]' />
                          </Link>
                      </div>
                      <Image 
                        src={require("@/assets/titanic.png")}
                        alt="titanic in the deep of the sea"
                        className='w-full scale-150 lg:scale-[1.4] -translate-x-6 mt-[15rem]'
                      />
                </div>

          </div>
          
      </main>

      
    </>
  )
}
