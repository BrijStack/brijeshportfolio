import { motion } from "framer-motion";

const LogoSvg = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0912 85.8129C27.7941 85.5798 27.5724 85.282 27.4258 84.9192C27.2708 84.5516 27.2043 84.1658 27.2263 83.762C27.2399 83.3534 27.3466 82.9686 27.5467 82.6079C27.7992 82.1527 28.1436 81.8047 28.5797 81.5644C29.0113 81.3326 29.5093 81.2335 30.074 81.2671C30.6253 81.3044 31.2008 81.4903 31.8007 81.8247L35.1423 83.6876L30.1613 92.6687L26.948 90.8774C26.3397 90.5383 25.8784 90.1463 25.5644 89.7012C25.2456 89.2648 25.0744 88.8152 25.0507 88.3522C25.0271 87.8891 25.1343 87.4429 25.3726 87.0134C25.668 86.4808 26.059 86.1196 26.5456 85.9297C27.019 85.7438 27.5342 85.7048 28.0912 85.8129ZM31.1427 88.1381L29.1763 87.042C28.628 86.7364 28.1324 86.6287 27.6896 86.7192C27.2466 86.8097 26.899 87.0827 26.6464 87.5379C26.394 87.9931 26.3463 88.4333 26.5031 88.8583C26.6601 89.283 27.0214 89.6531 27.5869 89.9684L29.5276 91.0503L31.1427 88.1381ZM31.3675 82.8485C30.7848 82.5237 30.2544 82.4079 29.7765 82.5013C29.2984 82.5946 28.9235 82.8862 28.652 83.3759C28.3757 83.874 28.3302 84.3605 28.5157 84.835C28.6966 85.3182 29.0739 85.7197 29.648 86.0398L31.6788 87.1718L33.4368 84.002L31.3675 82.8485Z"
        fill="white"
      />
      <path
        d="M21.3582 82.6312C20.8762 82.8192 20.3892 82.8651 19.8976 82.7684C19.3985 82.6652 18.9147 82.4044 18.4459 81.9862L19.365 80.9511L19.6288 81.1863C20.7492 82.1862 21.8503 82.0768 22.9325 80.858L25.8463 77.5763L26.8458 78.4685L21.4876 84.5032L20.4881 83.6113L21.3582 82.6312Z"
        fill="white"
      />
      <path
        d="M14.7334 79.5777C14.8969 79.7737 14.9675 79.9964 14.9452 80.2455C14.923 80.4949 14.8141 80.7014 14.6185 80.8652C14.4229 81.0291 14.2008 81.0998 13.9522 81.0775C13.7037 81.0553 13.4976 80.946 13.3342 80.7499C13.177 80.5614 13.1127 80.3463 13.1412 80.1046C13.1635 79.8555 13.2724 79.6489 13.468 79.4851C13.6636 79.3211 13.8857 79.2503 14.1342 79.2726C14.3765 79.2874 14.5763 79.3891 14.7334 79.5777ZM15.3228 78.2385L21.5066 73.0575L22.3648 74.0871L16.1809 79.2679L15.3228 78.2385Z"
        fill="white"
      />
      <path
        d="M11.3716 75.0077C11.5098 75.2225 11.5526 75.4521 11.5 75.6967C11.442 75.9331 11.306 76.1205 11.0918 76.2591C10.8776 76.3975 10.6512 76.4445 10.4125 76.4001C10.1686 76.3474 9.97751 76.2137 9.83931 75.999C9.70111 75.7842 9.66098 75.5586 9.7189 75.3224C9.77151 75.0778 9.90491 74.8862 10.1191 74.7476C10.3333 74.6091 10.5624 74.5662 10.8063 74.619C11.045 74.6634 11.2334 74.7929 11.3716 75.0077ZM20.3547 68.4074C20.956 68.0184 21.4951 67.886 21.9719 68.0105C22.4487 68.1349 22.8758 68.4903 23.2531 69.0766L23.6756 69.7332L22.7241 70.3488L22.4212 69.878C22.2192 69.5641 22.0166 69.3852 21.8134 69.3413C21.6047 69.2891 21.3521 69.3589 21.0555 69.5507L12.8381 74.8662L12.1126 73.7388L20.3547 68.4074Z"
        fill="white"
      />
      <path
        d="M16.3123 64.0352C16.5499 64.6068 16.6681 65.159 16.6666 65.692C16.656 66.2289 16.5336 66.7007 16.2991 67.1076C16.0555 67.5181 15.7132 67.8315 15.272 68.0479L14.7402 66.7686C15.0962 66.5773 15.3276 66.2782 15.4347 65.8714C15.538 65.4555 15.484 64.9937 15.2728 64.4855C15.0766 64.0138 14.8179 63.6853 14.4966 63.5002C14.1754 63.3149 13.8563 63.2886 13.5396 63.4209C13.2138 63.557 13.0344 63.8023 13.0012 64.1569C12.959 64.5154 12.9874 65.0306 13.0863 65.7027C13.1715 66.3167 13.2153 66.8307 13.2176 67.245C13.2071 67.6541 13.1099 68.0461 12.9259 68.4212C12.7291 68.7909 12.3909 69.076 11.9113 69.2765C11.5312 69.4352 11.1357 69.4673 10.7247 69.373C10.3136 69.2784 9.9309 69.0604 9.5764 68.7187C9.21287 68.3807 8.91983 67.9442 8.6973 67.4088C8.35407 66.5834 8.28498 65.8295 8.49003 65.1475C8.69508 64.4656 9.15204 63.9551 9.86091 63.6163L10.3757 64.8546C9.99794 65.0445 9.75175 65.3338 9.63715 65.7224C9.5188 66.1019 9.55957 66.5321 9.75947 67.013C9.94429 67.4575 10.1864 67.7717 10.4858 67.9553C10.7852 68.1389 11.0888 68.1666 11.3965 68.038C11.6408 67.936 11.8124 67.7738 11.9111 67.5515C11.9971 67.3238 12.0408 67.0714 12.0423 66.7939C12.0309 66.5111 11.9954 66.1319 11.9358 65.6563C11.8581 65.0605 11.8218 64.5645 11.827 64.1684C11.8232 63.7761 11.9125 63.4032 12.095 63.0502C12.2737 62.688 12.5874 62.4079 13.0361 62.2097C13.4433 62.0395 13.857 61.9998 14.277 62.0904C14.6971 62.1812 15.0889 62.3954 15.4524 62.7334C15.8032 63.0659 16.0898 63.4999 16.3123 64.0352Z"
        fill="white"
      />
      <path
        d="M7.2628 58.4486L11.923 57.5267C12.3077 57.4507 12.5657 57.3144 12.6969 57.1181C12.8186 56.9239 12.8395 56.6241 12.7598 56.2191L12.5691 55.25L13.68 55.0302L13.9134 56.2163C14.0577 56.9492 13.9975 57.5321 13.733 57.9652C13.4685 58.3982 12.9515 58.6908 12.182 58.8429L7.52185 59.7649L7.72398 60.7919L6.6419 61.006L6.43978 59.979L4.44875 60.3728L4.1897 59.0566L6.18071 58.6627L5.77362 56.5943L6.85569 56.3802L7.2628 58.4486Z"
        fill="white"
      />
      <path
        d="M9.22855 53.0837C8.4055 53.0557 7.69097 52.8642 7.08496 52.5092C6.46914 52.1541 5.99957 51.6808 5.6762 51.0896C5.35318 50.4886 5.20378 49.8294 5.228 49.1124C5.2519 48.405 5.42452 47.7963 5.74584 47.286C6.06718 46.7757 6.46243 46.4006 6.93158 46.1607L5.46184 46.1109L5.50762 44.7554L13.5618 45.0288L13.516 46.3843L12.0169 46.3336C12.4783 46.6147 12.8567 47.0258 13.1524 47.5669C13.4385 48.0978 13.5698 48.7122 13.5463 49.4095C13.522 50.1267 13.3238 50.769 12.9514 51.3366C12.5791 51.9041 12.0689 52.3441 11.4207 52.6565C10.7725 52.9689 10.0418 53.1112 9.22855 53.0837ZM9.47424 46.2471C8.86674 46.2266 8.33349 46.3313 7.87447 46.5616C7.41545 46.7919 7.06122 47.1143 6.81179 47.5286C6.5529 47.9329 6.41499 48.3855 6.39806 48.8865C6.38113 49.3876 6.48328 49.8482 6.7045 50.2689C6.92573 50.6894 7.25754 51.0301 7.69997 51.2911C8.14239 51.5519 8.66736 51.6926 9.27486 51.7132C9.89215 51.7342 10.4352 51.6297 10.904 51.3999C11.363 51.1695 11.722 50.8522 11.9809 50.4479C12.23 50.0435 12.363 49.5907 12.3799 49.0896C12.3969 48.5886 12.2947 48.1278 12.0735 47.7073C11.8428 47.2766 11.5062 46.9308 11.0638 46.6699C10.6116 46.4088 10.0817 46.2677 9.47424 46.2471Z"
        fill="white"
      />
      <path
        d="M10.1262 41.3723C9.33277 41.1165 8.69305 40.735 8.20699 40.2274C7.7116 39.7169 7.39054 39.1282 7.2438 38.4614C7.10006 37.7854 7.14516 37.0824 7.3791 36.3525C7.68202 35.4074 8.15962 34.7043 8.81194 34.2435C9.46725 33.7732 10.2324 33.5706 11.1074 33.6358L10.6666 35.0113C10.1579 34.992 9.70671 35.1306 9.31307 35.4269C8.92242 35.7141 8.63712 36.1384 8.45717 36.6998C8.22323 37.4297 8.28629 38.1004 8.64637 38.7121C8.9971 39.3205 9.62983 39.7721 10.5446 40.0668C11.4686 40.3645 12.2546 40.3699 12.9026 40.083C13.5506 39.7964 13.9916 39.2879 14.2255 38.5581C14.4055 37.9965 14.4248 37.4866 14.2834 37.0281C14.142 36.5697 13.8511 36.1919 13.4107 35.8953L13.8516 34.5197C14.5697 34.9782 15.0678 35.5929 15.3458 36.3638C15.6146 37.1317 15.6005 37.979 15.3036 38.9054C15.0696 39.6352 14.6979 40.2329 14.1882 40.6985C13.6816 41.1547 13.0786 41.4458 12.3792 41.5715C11.6799 41.6973 10.9289 41.6308 10.1262 41.3723Z"
        fill="white"
      />
      <path
        d="M19.8679 29.2642L15.1754 30.0679L18.196 31.9545L17.4883 33.0932L8.25183 27.3243L8.95946 26.1855L14.389 29.5768L12.9967 25.042L13.9843 23.4527L15.3856 28.8096L20.8321 27.7124L19.8679 29.2642Z"
        fill="white"
      />
      <path
        d="M21.9559 17.99L22.751 18.7984L18.5729 22.9287L17.7778 22.1202L21.9559 17.99Z"
        fill="white"
      />
      <path
        d="M33.1107 6.18714L37.7643 15.2604L36.5741 15.8739L33.1042 9.10829L33.5661 17.4245L32.729 17.856L26.2313 12.6346L29.708 19.4134L28.5179 20.0269L23.8645 10.9536L25.146 10.2929L32.3406 16.0668L31.8421 6.84109L33.1107 6.18714Z"
        fill="white"
      />
      <path
        d="M46.1892 5.48144L43.4027 18.0144L42.0402 18.248L42.9516 14.1431L38.405 6.81546L39.8691 6.56457L43.4625 12.5897L44.8266 5.71496L46.1892 5.48144Z"
        fill="white"
      />
      <path
        d="M55.6265 7.92813L55.5419 9.0602L49.6906 8.62084L49.7752 7.48878L55.6265 7.92813Z"
        fill="white"
      />
      <path
        d="M64.8717 5.79339C65.9225 6.17488 66.7588 6.70319 67.3804 7.37833C68.0145 8.04758 68.4026 8.82087 68.5444 9.6982C68.6956 10.5789 68.5926 11.5136 68.2354 12.5025C67.8782 13.4914 67.3604 14.2756 66.682 14.8551C66.016 15.4287 65.2258 15.769 64.3112 15.8761C63.4093 15.9772 62.4328 15.8371 61.382 15.4556L58.3813 14.3664L61.8711 4.70417L64.8717 5.79339ZM61.7575 14.4159C63.0019 14.8677 64.0699 14.8843 64.9614 14.4657C65.8562 14.0379 66.5189 13.2279 66.9495 12.0357C67.3833 10.8343 67.3903 9.77578 66.9702 8.86019C66.5595 7.94797 65.7364 7.26764 64.5011 6.81923L62.759 6.18678L60.0152 13.7834L61.7575 14.4159Z"
        fill="white"
      />
      <path
        d="M77.1052 19.4766C76.9544 19.6827 76.783 19.8919 76.591 20.1042L71.3987 16.2828C70.9683 16.9537 70.8173 17.6167 70.9456 18.2721C71.0876 18.9252 71.443 19.4612 72.0121 19.8799C72.4783 20.2231 72.944 20.4012 73.4088 20.4141C73.8873 20.4249 74.3232 20.2945 74.7165 20.0231L75.8783 20.8782C75.2461 21.3762 74.5242 21.6313 73.7126 21.6435C72.9067 21.648 72.1165 21.3651 71.342 20.795C70.7255 20.3414 70.2739 19.7956 69.9869 19.1577C69.7079 18.5255 69.6157 17.8542 69.7105 17.1436C69.811 16.4249 70.1077 15.7289 70.6008 15.0554C71.094 14.382 71.6606 13.8906 72.3005 13.5812C72.9405 13.2719 73.6002 13.16 74.2796 13.2454C74.9726 13.3287 75.6353 13.603 76.2675 14.0683C76.884 14.522 77.3306 15.058 77.6075 15.6764C77.8845 16.2947 77.9753 16.9347 77.8802 17.5962C77.7987 18.2555 77.5404 18.8824 77.1052 19.4766ZM76.1562 18.4308C76.458 18.0187 76.6252 17.5993 76.6582 17.1724C76.6968 16.7375 76.6133 16.3284 76.4074 15.9452C76.2152 15.5599 75.9294 15.2277 75.55 14.9485C75.0048 14.5472 74.4108 14.3783 73.7683 14.4419C73.1337 14.5114 72.5624 14.8347 72.0546 15.412L76.1562 18.4308Z"
        fill="white"
      />
      <path
        d="M79.0855 26.3234L85.9626 23.9687L86.8598 25.0805L78.6062 27.6985L77.6257 26.4835L81.9017 18.9373L82.8082 20.0604L79.0855 26.3234Z"
        fill="white"
      />
      <path
        d="M89.3555 34.5412L88.3292 35.0208L85.85 29.6891L86.8763 29.2095L89.3555 34.5412Z"
        fill="white"
      />
      <path
        d="M96.9732 51.7237L86.4575 49.9001L86.2917 48.4056L94.2276 45.1172L85.7549 43.5702L85.5762 42.0917L95.4606 38.0965L95.6185 39.5179L87.2278 42.7087L96.1389 44.2067L96.3048 45.7014L87.9564 49.006L96.8138 50.2877L96.9732 51.7237Z"
        fill="white"
      />
      <path
        d="M85.1695 58.3802C85.3432 57.6437 85.668 57.0136 86.1441 56.4902C86.618 55.9764 87.2007 55.6196 87.8925 55.42C88.5917 55.2323 89.3468 55.2344 90.1577 55.4268C90.9592 55.6168 91.6245 55.9562 92.1539 56.4453C92.6905 56.9463 93.05 57.5365 93.2324 58.216C93.4242 58.8978 93.432 59.6117 93.2561 60.3577C93.0801 61.1038 92.7541 61.7385 92.2781 62.2621C91.8115 62.7878 91.2324 63.1505 90.5405 63.35C89.8464 63.5592 89.094 63.5675 88.283 63.3754C87.4719 63.1831 86.7992 62.8317 86.2649 62.3212C85.7378 61.8226 85.3794 61.2276 85.1899 60.5363C85.0004 59.8448 84.9935 59.1262 85.1695 58.3802ZM86.3144 58.6516C86.2038 59.1203 86.2098 59.5862 86.3322 60.0496C86.4546 60.5129 86.7059 60.9209 87.0861 61.2736C87.4641 61.636 87.968 61.8917 88.5977 62.0409C89.2273 62.1903 89.791 62.1926 90.2886 62.048C90.786 61.9033 91.1871 61.655 91.4919 61.303C91.8059 60.9532 92.0183 60.544 92.1289 60.0753C92.2417 59.5971 92.2358 59.1311 92.1111 58.6773C91.9936 58.2354 91.7436 57.8429 91.3613 57.4997C90.9788 57.1565 90.4727 56.9103 89.843 56.761C89.2038 56.6095 88.6376 56.5966 88.1446 56.722C87.6494 56.8572 87.2458 57.0947 86.9338 57.435C86.6314 57.7773 86.4249 58.1828 86.3144 58.6516Z"
        fill="white"
      />
      <path
        d="M88.7199 68.8987C89.0297 69.3142 89.2041 69.7722 89.2426 70.273C89.2771 70.7828 89.1559 71.3199 88.8794 71.8844L87.6386 71.2735L87.7941 70.9561C88.4552 69.6061 88.0554 68.5716 86.5946 67.8524L82.6609 65.9158L83.2508 64.7116L90.4846 68.2728L89.8948 69.4771L88.7199 68.8987Z"
        fill="white"
      />
      <path
        d="M88.4374 77.5115L79.4791 71.3171L80.2389 70.2127L89.1972 76.407L88.4374 77.5115Z"
        fill="white"
      />
      <path
        d="M80.8835 76.4984C81.451 77.0967 81.8268 77.7352 82.011 78.4142C82.2018 79.1005 82.2059 79.7678 82.0232 80.4169C81.8335 81.0725 81.4757 81.6511 80.95 82.1523C80.4954 82.5858 79.9714 82.882 79.3779 83.0409C78.7913 83.2068 78.2328 83.2171 77.7025 83.0717L80.6415 86.1699L79.6611 87.1046L72.1614 79.1991L73.1418 78.2643L74.1858 79.3647C74.0464 78.8328 74.057 78.2734 74.2173 77.6864C74.3843 77.1067 74.7201 76.5764 75.2245 76.0954C75.7431 75.6009 76.3371 75.2787 77.0065 75.1286C77.669 74.9854 78.3405 75.0302 79.0212 75.2628C79.702 75.4954 80.3227 75.9072 80.8835 76.4984ZM75.9289 81.2022C76.3477 81.6437 76.8015 81.9436 77.2899 82.1019C77.7783 82.2603 78.2562 82.2791 78.7239 82.1589C79.1912 82.0524 79.6059 81.8265 79.9683 81.481C80.3306 81.1355 80.5797 80.7352 80.716 80.2798C80.8523 79.8242 80.8538 79.3481 80.7206 78.8511C80.5874 78.3541 80.3113 77.885 79.8925 77.4433C79.4667 76.9946 79.0064 76.6876 78.5111 76.5222C78.0227 76.3639 77.5449 76.3381 77.0776 76.4444C76.6172 76.5581 76.2057 76.7876 75.8435 77.1329C75.481 77.4784 75.2319 77.8789 75.0956 78.3343C74.9592 78.8036 74.9574 79.2867 75.0905 79.7837C75.2306 80.2878 75.51 80.7606 75.9289 81.2022Z"
        fill="white"
      />
      <path
        d="M67.6165 88.7514L67.0792 87.752L72.2446 84.9614L72.7818 85.9607L67.6165 88.7514Z"
        fill="white"
      />
      <path
        d="M40.6153 40.0873C41.8946 40.0873 42.9317 39.0479 42.9317 37.7657C42.9317 36.4834 41.8946 35.444 40.6153 35.444C39.3359 35.444 38.2988 36.4834 38.2988 37.7657C38.2988 39.0479 39.3359 40.0873 40.6153 40.0873Z"
        fill="white"
      />
      <motion.path
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        d="M50.9618 39.8745L50.9391 39.8561L49.416 38.659C49.3195 38.5825 49.2425 38.4842 49.1914 38.3721C49.1402 38.2601 49.1162 38.1374 49.1216 38.0142V37.4551C49.1167 37.3327 49.141 37.211 49.1922 37.0998C49.2435 36.9887 49.3203 36.8913 49.4165 36.8157L50.9391 35.6181L50.9618 35.5997C51.1966 35.4037 51.3541 35.1303 51.4062 34.8285C51.4585 34.5266 51.4018 34.2162 51.2464 33.9523L49.1853 30.378C49.1829 30.3745 49.1807 30.3709 49.1789 30.3673C49.0229 30.1072 48.7807 29.91 48.4946 29.8102C48.2085 29.7103 47.8966 29.714 47.6129 29.8207L47.5961 29.8271L45.8057 30.5492C45.6927 30.5949 45.5704 30.6132 45.449 30.6022C45.3276 30.5914 45.2105 30.5518 45.1074 30.4868C44.949 30.3868 44.7883 30.2923 44.6247 30.2034C44.5188 30.1457 44.4278 30.064 44.3592 29.9647C44.2905 29.8654 44.2461 29.7512 44.2294 29.6316L43.9597 27.7167L43.9539 27.6819C43.8953 27.3853 43.7365 27.1181 43.5043 26.9249C43.2721 26.7318 42.9806 26.6248 42.6789 26.6217H38.5518C38.2458 26.6227 37.95 26.7318 37.7165 26.9298C37.483 27.1281 37.3268 27.4025 37.2753 27.7047L37.2709 27.7317L37.0021 29.6505C36.9856 29.7697 36.9415 29.8836 36.8736 29.9829C36.8054 30.0821 36.7151 30.164 36.6098 30.2222C36.4459 30.3107 36.285 30.4045 36.1271 30.5036C36.0242 30.5683 35.9074 30.6077 35.7865 30.6183C35.6654 30.6291 35.5435 30.6108 35.4307 30.5651L33.6389 29.8395L33.6221 29.8328C33.3381 29.726 33.0257 29.7224 32.7392 29.8227C32.4528 29.9229 32.2106 30.1206 32.0546 30.3813L32.0482 30.3919L29.9842 33.9688C29.8286 34.2329 29.7719 34.5438 29.824 34.8459C29.8762 35.1481 30.0338 35.4218 30.269 35.6181L30.2917 35.6364L31.8147 36.8336C31.9111 36.9101 31.9881 37.0084 32.0394 37.1204C32.0905 37.2325 32.1144 37.3552 32.1092 37.4784V38.0375C32.1139 38.1598 32.0897 38.2816 32.0384 38.3928C31.9873 38.5039 31.9103 38.6013 31.8142 38.6768L30.2917 39.8745L30.269 39.8928C30.0342 40.0889 29.8765 40.3623 29.8244 40.6641C29.7722 40.9658 29.8289 41.2764 29.9842 41.5403L32.0454 45.1146C32.0477 45.118 32.0499 45.1216 32.0517 45.1253C32.2079 45.3854 32.45 45.5825 32.7361 45.6824C33.0221 45.7821 33.334 45.7785 33.6177 45.6719L33.6347 45.6655L35.4236 44.9434C35.5366 44.8976 35.6588 44.8794 35.7803 44.8902C35.9017 44.9012 36.0188 44.9406 36.1219 45.0058C36.2802 45.1061 36.441 45.2006 36.6044 45.2892C36.7105 45.3469 36.8015 45.4286 36.8701 45.5279C36.9387 45.6272 36.9832 45.7414 36.9997 45.8609L37.268 47.7758L37.2739 47.8107C37.3327 48.1077 37.4919 48.3753 37.7247 48.5685C37.9575 48.7616 38.2495 48.8684 38.5518 48.8709H42.6789C42.9848 48.8699 43.2806 48.7608 43.5141 48.5626C43.7476 48.3645 43.9039 48.0901 43.9554 47.7879L43.9597 47.7609L44.2286 45.8421C44.2453 45.7225 44.2897 45.6085 44.3582 45.5092C44.4268 45.41 44.5175 45.3282 44.6232 45.2704C44.7884 45.1814 44.9495 45.0871 45.1059 44.989C45.2088 44.9243 45.3257 44.8849 45.4468 44.8741C45.5678 44.8635 45.6896 44.8818 45.8023 44.9275L47.5941 45.6506L47.6111 45.6573C47.8951 45.7643 48.2075 45.7679 48.494 45.6678C48.7804 45.5676 49.0227 45.3697 49.1785 45.1089C49.1804 45.1051 49.1825 45.1017 49.1848 45.0982L51.2459 41.5243C51.4018 41.2602 51.4588 40.9493 51.4067 40.6469C51.3546 40.3446 51.1969 40.0707 50.9618 39.8745ZM44.4718 37.9282C44.4366 38.6772 44.1852 39.3998 43.7477 40.0082C43.3105 40.6166 42.7062 41.0846 42.0084 41.3551C41.3106 41.6257 40.5495 41.6873 39.8175 41.5323C39.0855 41.3773 38.4141 41.0125 37.8852 40.4822C37.3561 39.9521 36.9922 39.2792 36.8378 38.5455C36.6832 37.8119 36.7448 37.049 37.0147 36.3497C37.2848 35.6504 37.7518 35.0447 38.3588 34.6065C38.966 34.1683 39.6869 33.9164 40.4343 33.8812C40.9709 33.8576 41.5064 33.946 42.007 34.141C42.5075 34.3361 42.9623 34.6332 43.342 35.0139C43.7216 35.3945 44.0182 35.8502 44.2128 36.352C44.4072 36.8536 44.4954 37.3904 44.4718 37.9282Z"
        fill="white"
      />
      <path
        d="M60.8668 48.8339C62.0087 49.2637 63.2819 48.6846 63.7106 47.5404C64.1396 46.3961 63.5618 45.12 62.42 44.6902C61.2783 44.2603 60.0051 44.8394 59.5762 45.9836C59.1474 47.1281 59.7252 48.404 60.8668 48.8339Z"
        fill="white"
      />
      <motion.path
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        d="M70.1648 52.1375L70.1508 52.1136L69.1919 50.5334C69.1315 50.4329 69.0957 50.3192 69.0875 50.202C69.0792 50.0847 69.099 49.9673 69.1449 49.8592L69.332 49.3602C69.3686 49.2493 69.4308 49.1489 69.5138 49.0668C69.5967 48.9849 69.6978 48.9238 69.8089 48.8886L71.5683 48.3314L71.5947 48.3226C71.8699 48.2266 72.1019 48.0356 72.2495 47.7838C72.3968 47.532 72.4503 47.2357 72.3998 46.9482L71.756 43.0658C71.755 43.062 71.7544 43.0581 71.754 43.0541C71.7016 42.7696 71.5514 42.5122 71.3295 42.3271C71.1076 42.1419 70.8281 42.0403 70.5392 42.0403L70.522 42.0401L68.6826 42.0831C68.5665 42.086 68.4513 42.0611 68.3467 42.0106C68.2419 41.9602 68.1506 41.8855 68.0803 41.7928C67.9725 41.6504 67.8606 41.512 67.7446 41.3777C67.6692 41.2907 67.6153 41.1871 67.5872 41.0754C67.5593 40.9637 67.5578 40.8471 67.583 40.7347L67.9828 38.9352L67.9892 38.9021C68.0361 38.6177 67.9838 38.3258 67.8411 38.0755C67.6985 37.8252 67.4741 37.6317 67.206 37.5275L63.5228 36.1408C63.2495 36.0389 62.949 36.037 62.6745 36.1353C62.3998 36.2337 62.1686 36.426 62.0215 36.6785L62.0086 36.7011L61.1269 38.3232C61.0722 38.4241 60.9949 38.5109 60.9009 38.5766C60.8068 38.6423 60.6988 38.685 60.5854 38.7016C60.4096 38.7255 60.2346 38.7552 60.0606 38.7905C59.9472 38.8138 59.8297 38.8095 59.7181 38.7784C59.6065 38.7473 59.5039 38.6901 59.4186 38.6115L58.0622 37.3619L58.0495 37.3503C57.8317 37.1594 57.554 37.0513 57.265 37.0446C56.9759 37.0377 56.6936 37.1327 56.4671 37.3131L56.458 37.3205L53.4196 39.819C53.1924 40.0023 53.0377 40.2606 52.9831 40.5479C52.9287 40.8351 52.9779 41.1323 53.122 41.3865L53.1361 41.4106L54.0949 42.9906C54.1553 43.0912 54.1911 43.2049 54.1993 43.322C54.2075 43.4393 54.1879 43.5567 54.1419 43.6648L53.9549 44.1638C53.9183 44.2747 53.8558 44.3751 53.773 44.4572C53.69 44.5391 53.5888 44.6002 53.4779 44.6354L51.7184 45.1926L51.6921 45.2014C51.4169 45.2974 51.1849 45.4884 51.0374 45.7402C50.8898 45.9922 50.8366 46.2883 50.8869 46.5758L51.5308 50.4582C51.5318 50.462 51.5325 50.4659 51.5328 50.4699C51.5852 50.7544 51.7354 51.0118 51.9573 51.1971C52.1792 51.3822 52.4588 51.4837 52.7475 51.4837L52.7647 51.4839L54.6027 51.4405C54.7189 51.4375 54.8341 51.4624 54.9388 51.5129C55.0436 51.5633 55.1349 51.638 55.2052 51.7308C55.3129 51.8734 55.4248 52.0119 55.541 52.1459C55.6163 52.2329 55.6702 52.3364 55.6982 52.4481C55.7263 52.5598 55.7277 52.6765 55.7024 52.7888L55.3014 54.5879L55.2949 54.6209C55.2482 54.9058 55.3006 55.1982 55.4437 55.4487C55.5869 55.6993 55.8119 55.8928 56.0808 55.9965L59.7638 57.3832C60.0372 57.4851 60.3377 57.4871 60.6124 57.3888C60.887 57.2903 61.1183 57.098 61.2653 56.8455L61.2782 56.8229L62.1599 55.2009C62.2148 55.0998 62.2926 55.013 62.387 54.9474C62.4813 54.8819 62.5897 54.8395 62.7034 54.8233C62.8805 54.7993 63.0558 54.7694 63.2282 54.7343C63.3418 54.711 63.4593 54.7153 63.5709 54.7464C63.6825 54.7776 63.7851 54.8347 63.8702 54.9134L65.2276 56.1608L65.2403 56.1724C65.458 56.3633 65.7356 56.4716 66.0248 56.4784C66.3138 56.4852 66.5964 56.3901 66.8227 56.2096C66.8256 56.207 66.8285 56.2045 66.8318 56.2023L69.8666 53.7054C70.0941 53.5221 70.249 53.2637 70.3035 52.9764C70.3583 52.6892 70.3091 52.3918 70.1648 52.1375ZM65.0241 48.22C64.7423 48.8766 64.2761 49.437 63.6823 49.8331C63.0885 50.2291 62.3926 50.4437 61.6795 50.4507C60.9663 50.4578 60.2665 50.2569 59.665 49.8726C59.0635 49.4885 58.5864 48.9374 58.2918 48.2864C57.997 47.6354 57.8973 46.9126 58.0049 46.2061C58.1124 45.4994 58.4223 44.8392 58.8973 44.3059C59.3722 43.7726 59.9915 43.389 60.6799 43.2019C61.3683 43.0148 62.096 43.0322 62.7746 43.2519C63.2614 43.4111 63.7098 43.6699 64.0913 44.0121C64.4728 44.3543 64.779 44.7724 64.9906 45.2398C65.2021 45.707 65.3143 46.2133 65.3202 46.7264C65.3259 47.2395 65.2251 47.7481 65.0241 48.22Z"
        fill="white"
      />
      <path
        d="M52.6125 94.772H50.5942V74.2738L65.8635 58.9701L67.2906 60.4005L52.6125 75.1116V94.772Z"
        fill="white"
      />
      <path
        d="M47.4283 94.772H45.41V75.1116L30.7317 60.4005L32.1588 58.9701L47.4283 74.2738V94.772Z"
        fill="white"
      />
      <path
        d="M49.0113 71.2937C47.5917 71.2937 46.2572 70.7397 45.2534 69.7337C44.2497 68.7277 43.6969 67.3902 43.6969 65.9674C43.6969 64.5449 44.2497 63.2073 45.2534 62.2013C46.2572 61.1953 47.5917 60.6413 49.0113 60.6413C50.4307 60.6413 51.7654 61.1953 52.7691 62.2013C53.7727 63.2073 54.3257 64.5449 54.3257 65.9674C54.3257 67.3902 53.7727 68.7277 52.7691 69.7337C51.7654 70.7397 50.4307 71.2937 49.0113 71.2937ZM49.0113 62.6639C47.1938 62.6639 45.7152 64.146 45.7152 65.9674C45.7152 67.789 47.1938 69.2709 49.0113 69.2709C50.8288 69.2709 52.3074 67.789 52.3074 65.9674C52.3074 64.146 50.8288 62.6639 49.0113 62.6639Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoSvg;
