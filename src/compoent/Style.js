const Style = {
  box: ``,
  header: `flex 
           flex-shrink 
           justify-evenly 
           items-center 
           gap-2 
           p-2`,

  links: `  text-primary 
            transition 
            duration-150 
            ease-in-out 
            hover:text-primary-600 
            focus:text-primary-600 
            active:text-primary-700 
            dark:text-primary-400 dark:hover:text-primary-500 
            dark:focus:text-primary-500 dark:active:text-primary-600`,

  boxImg: `flex 
        flex-col 
        justify-center items-start 
        border border-solid border-cyan-600
        rounded-md`,

  contenierPic: {
    box: `w-12 h-12 flex justify-center items-center rounded-full  overflow-hidden bg-gray-700`,
    img: `block w-full`,
  },

  tLgW: `text-2xl text-balck font-bold `,
};
export default Style;
