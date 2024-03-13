import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  // <svg
  // 	fill="none"
  // 	height={size || height}
  // 	viewBox="0 0 32 32"
  // 	width={size || width}
  // 	{...props}
  // >
  // 	<path
  // 		clipRule="evenodd"
  // 		d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  // 		fill="currentColor"
  // 		fillRule="evenodd"
  // 	/>
  // </svg>
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 53 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M22.7503 0.567376C21.737 -0.178929 20.3507 -0.189975 19.3253 0.540085L1.20253 13.4436L2.04935 14.6037L1.20253 13.4436C0.447428 13.9812 0 14.8445 0 15.7639V41.1327C0 42.7125 1.29666 43.9931 2.89617 43.9931H38.5191C40.1186 43.9931 41.4153 42.7125 41.4153 41.1327V15.7494C41.4153 14.8463 40.9835 13.9962 40.2505 13.4564L22.7503 0.567376Z'
      fill='#DDBA8D'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M28.5426 3.42773C27.5292 2.68142 26.1429 2.67038 25.1176 3.40044L6.99476 16.3039L7.84159 17.4641L6.99476 16.3039C6.23966 16.8416 5.79224 17.7049 5.79224 18.6242V43.9931C5.79224 45.5728 7.08889 46.8535 8.68841 46.8535H44.3114C45.9109 46.8535 47.2075 45.5728 47.2075 43.9931V18.6097C47.2075 17.7066 46.7757 16.8566 46.0427 16.3167L28.5426 3.42773Z'
      fill='#A99682'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M34.28 6.22166C33.2923 5.48864 31.9683 5.47588 30.9671 6.1942L12.8433 19.1969C12.0212 19.7866 11.5847 20.7434 11.5847 21.7023V46.9639C11.5847 48.4804 12.7282 49.9999 14.4809 49.9999H50.1038C51.8565 49.9999 53 48.4804 53 46.9639V21.6862C53 20.7423 52.5773 19.8006 51.7791 19.2082L34.28 6.22166Z'
      fill='#404D6C'
    />
    <path
      d='M26.4275 38.2353L26.4275 48.5697L38.157 48.5697L38.157 38.2353C38.157 31.0381 26.4275 31.0381 26.4275 38.2353Z'
      fill='white'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M29.1841 35.2883C28.4175 35.9155 27.8757 36.8607 27.8757 38.2353L27.8757 47.1395L36.709 47.1395L36.709 38.2353C36.709 36.8607 36.1672 35.9155 35.4006 35.2883C34.6002 34.6335 33.4764 34.2676 32.2923 34.2676C31.1083 34.2676 29.9844 34.6335 29.1841 35.2883ZM37.2481 33.0855C38.6808 34.2576 39.6052 36.0113 39.6052 38.2353L39.6052 49.9999L24.9795 49.9999L24.9795 38.2353C24.9795 36.0113 25.9039 34.2576 27.3366 33.0855C28.7355 31.941 30.544 31.4072 32.2923 31.4072C34.0407 31.4072 35.8492 31.941 37.2481 33.0855Z'
      fill='white'
    />
    <path
      d='M37.7227 22.8262C37.7227 25.7882 35.2915 28.1894 32.2924 28.1894C29.2933 28.1894 26.8621 25.7882 26.8621 22.8262C26.8621 19.8641 29.2933 17.4629 32.2924 17.4629C35.2915 17.4629 37.7227 19.8641 37.7227 22.8262Z'
      fill='white'
    />
  </svg>
);

export const WhiteLogo: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox='0 0 53 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M18.1776 1.96447L17.2921 0.753786V0.753786L18.1776 1.96447ZM21.0448 1.98794L20.1397 3.18412V3.18412L21.0448 1.98794ZM3.00666 13.0615L2.12109 11.8508L2.12109 11.8508L3.00666 13.0615ZM35.6945 13.0725L34.7894 14.2686V14.2686L35.6945 13.0725ZM19.0632 3.17516C19.3868 2.93848 19.8195 2.94184 20.1397 3.18412L21.9498 0.791765C20.5735 -0.249595 18.6852 -0.26524 17.2921 0.753786L19.0632 3.17516ZM3.89223 14.2722L19.0632 3.17516L17.2921 0.753786L2.12109 11.8508L3.89223 14.2722ZM3.5 15.057C3.5 14.7393 3.65066 14.4489 3.89223 14.2722L2.12109 11.8508C1.09844 12.5988 0.5 13.7933 0.5 15.057H3.5ZM3.5 36.8741V15.057H0.5V36.8741H3.5ZM4.42445 37.8341C3.93437 37.8341 3.5 37.4249 3.5 36.8741H0.5C0.5 39.0405 2.23654 40.8341 4.42445 40.8341V37.8341ZM34.2452 37.8341H4.42445V40.8341H34.2452V37.8341ZM35.1696 36.8741C35.1696 37.4249 34.7352 37.8341 34.2452 37.8341V40.8341C36.4331 40.8341 38.1696 39.0405 38.1696 36.8741H35.1696ZM35.1696 15.0445V36.8741H38.1696V15.0445H35.1696ZM34.7894 14.2686C35.0242 14.4463 35.1696 14.7325 35.1696 15.0445H38.1696C38.1696 13.8031 37.592 12.6272 36.5996 11.8763L34.7894 14.2686ZM20.1397 3.18412L34.7894 14.2686L36.5996 11.8763L21.9498 0.791764L20.1397 3.18412Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M25.8934 4.4479C25.0451 3.80608 23.8846 3.79658 23.0263 4.42443L7.85529 15.5214C7.22318 15.9838 6.84863 16.7263 6.84863 17.5169V39.3341C6.84863 40.6927 7.93409 41.7941 9.27308 41.7941H39.0938C40.4328 41.7941 41.5182 40.6927 41.5182 39.3341V17.5044C41.5182 16.7278 41.1568 15.9967 40.5431 15.5324L25.8934 4.4479Z'
        fill='#1A202C'
      />
      <path
        d='M23.0263 4.42443L22.1407 3.21375V3.21375L23.0263 4.42443ZM25.8934 4.4479L24.9883 5.64408V5.64408L25.8934 4.4479ZM7.85529 15.5214L6.96972 14.3107L6.96972 14.3107L7.85529 15.5214ZM40.5431 15.5324L39.6381 16.7286V16.7286L40.5431 15.5324ZM23.9118 5.63512C24.2354 5.39844 24.6681 5.4018 24.9883 5.64408L26.7985 3.25173C25.4222 2.21037 23.5338 2.19472 22.1407 3.21375L23.9118 5.63512ZM8.74086 16.7321L23.9118 5.63512L22.1407 3.21375L6.96972 14.3107L8.74086 16.7321ZM8.34863 17.5169C8.34863 17.1993 8.49929 16.9088 8.74087 16.7321L6.96972 14.3107C5.94708 15.0588 5.34863 16.2532 5.34863 17.5169H8.34863ZM8.34863 39.3341V17.5169H5.34863V39.3341H8.34863ZM9.27308 40.2941C8.78301 40.2941 8.34863 39.8849 8.34863 39.3341H5.34863C5.34863 41.5005 7.08518 43.2941 9.27308 43.2941V40.2941ZM39.0938 40.2941H9.27308V43.2941H39.0938V40.2941ZM40.0182 39.3341C40.0182 39.8849 39.5839 40.2941 39.0938 40.2941V43.2941C41.2817 43.2941 43.0182 41.5005 43.0182 39.3341H40.0182ZM40.0182 17.5044V39.3341H43.0182V17.5044H40.0182ZM39.6381 16.7286C39.8729 16.9063 40.0182 17.1925 40.0182 17.5044H43.0182C43.0182 16.2631 42.4407 15.0872 41.4482 14.3363L39.6381 16.7286ZM24.9883 5.64408L39.6381 16.7286L41.4482 14.3363L26.7985 3.25173L24.9883 5.64408Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M30.6972 6.85056C29.8703 6.22016 28.762 6.20919 27.9239 6.82695L12.752 18.0092C12.0639 18.5164 11.6985 19.3393 11.6985 20.1639V41.8889C11.6985 43.1931 12.6557 44.4999 14.1229 44.4999H43.9437C45.4109 44.4999 46.3681 43.1931 46.3681 41.8889V20.1501C46.3681 19.3383 46.0142 18.5284 45.3461 18.019L30.6972 6.85056Z'
        fill='#1A202C'
      />
      <path
        d='M27.9239 6.82695L27.0339 5.61948L27.0339 5.61948L27.9239 6.82695ZM30.6972 6.85056L29.7877 8.04342L29.7877 8.04342L30.6972 6.85056ZM12.752 18.0092L11.8621 16.8018L11.8621 16.8018L12.752 18.0092ZM45.3461 18.019L46.2555 16.8261L46.2555 16.8261L45.3461 18.019ZM28.8138 8.03442C29.1139 7.81322 29.4893 7.81587 29.7877 8.04342L31.6066 5.65771C30.2514 4.62446 28.4101 4.60516 27.0339 5.61948L28.8138 8.03442ZM13.642 19.2167L28.8138 8.03442L27.0339 5.61948L11.8621 16.8018L13.642 19.2167ZM13.1985 20.1639C13.1985 19.7629 13.3782 19.4111 13.642 19.2167L11.8621 16.8018C10.7496 17.6217 10.1985 18.9157 10.1985 20.1639H13.1985ZM13.1985 41.8889V20.1639H10.1985V41.8889H13.1985ZM14.1229 42.9999C13.8691 42.9999 13.6636 42.8975 13.496 42.7033C13.3128 42.4911 13.1985 42.1879 13.1985 41.8889H10.1985C10.1985 43.8067 11.6277 45.9999 14.1229 45.9999V42.9999ZM43.9437 42.9999H14.1229V45.9999H43.9437V42.9999ZM44.8681 41.8889C44.8681 42.1879 44.7538 42.4911 44.5706 42.7033C44.403 42.8975 44.1975 42.9999 43.9437 42.9999V45.9999C46.4389 45.9999 47.8681 43.8067 47.8681 41.8889H44.8681ZM44.8681 20.1501V41.8889H47.8681V20.1501H44.8681ZM44.4366 19.2119C44.6943 19.4083 44.8681 19.7559 44.8681 20.1501H47.8681C47.8681 18.9208 47.3342 17.6486 46.2555 16.8261L44.4366 19.2119ZM29.7877 8.04342L44.4366 19.2119L46.2555 16.8261L31.6066 5.65771L29.7877 8.04342Z'
        fill='white'
      />
      <path
        d='M33.181 29.9536L34.1461 28.8053L34.1461 28.8053L33.181 29.9536ZM24.8838 29.9536L23.9187 28.8053L23.9187 28.8053L24.8838 29.9536ZM22.9106 44.4999H21.4106V45.9999H22.9106V44.4999ZM35.1541 44.4999V45.9999H36.6541V44.4999H35.1541ZM32.2158 31.1018C33.0718 31.8212 33.6541 32.907 33.6541 34.3824H36.6541C36.6541 32.0325 35.6889 30.102 34.1461 28.8053L32.2158 31.1018ZM29.0324 30.0103C30.1987 30.0103 31.355 30.3783 32.2159 31.1018L34.1461 28.8053C32.6648 27.5603 30.7932 27.0103 29.0324 27.0103V30.0103ZM25.8489 31.1018C26.7098 30.3783 27.866 30.0103 29.0324 30.0103V27.0103C27.2716 27.0103 25.3999 27.5603 23.9187 28.8053L25.8489 31.1018ZM24.4106 34.3824C24.4106 32.907 24.993 31.8212 25.8489 31.1018L23.9187 28.8053C22.3759 30.102 21.4106 32.0325 21.4106 34.3824H24.4106ZM24.4106 44.4999V34.3824H21.4106V44.4999H24.4106ZM35.1541 42.9999H22.9106V45.9999H35.1541V42.9999ZM33.6541 34.3824V44.4999H36.6541V34.3824H33.6541Z'
        fill='white'
      />
      <path
        d='M32.079 21.1305C32.079 22.87 30.6948 24.2429 29.0331 24.2429C27.3715 24.2429 25.9873 22.87 25.9873 21.1305C25.9873 19.3909 27.3715 18.0181 29.0331 18.0181C30.6948 18.0181 32.079 19.3909 32.079 21.1305Z'
        stroke='white'
        stroke-width='3'
      />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}>
      <path
        d='M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z'
        fill='currentColor'
      />
    </svg>
  );
};

export const HeartIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}) => {
  return (
    <svg
      aria-hidden='true'
      width={size || width}
      height='18'
      viewBox='0 0 15 15'
      fill={fill}
      role='presentation'
      focusable='false'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z'
        fill='currentColor'
        fill-rule='evenodd'
        clip-rule='evenodd'
        strokeWidth={strokeWidth}></path>
    </svg>
  );
};

export const EyeSlashFilledIcon = (props: any) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}>
    <path
      d='M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z'
      fill='currentColor'
    />
    <path
      d='M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z'
      fill='currentColor'
    />
    <path
      d='M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z'
      fill='currentColor'
    />
    <path
      d='M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z'
      fill='currentColor'
    />
    <path
      d='M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z'
      fill='currentColor'
    />
  </svg>
);

export const EyeFilledIcon = (props: any) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}>
    <path
      d='M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z'
      fill='currentColor'
    />
    <path
      d='M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z'
      fill='currentColor'
    />
  </svg>
);

export const NavigationIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      height='14'
      width={size || width}
      {...props}>
      <path
        d='M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z'
        fill='currentColor'
        fill-rule='evenodd'
        clip-rule='evenodd'></path>
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}>
      <path
        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'
        fill='currentColor'
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}>
      <path
        clipRule='evenodd'
        d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}>
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}>
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}>
    <path
      d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
      fill='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}>
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill='none'
      height={height}
      viewBox='0 0 161 32'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        className='fill-black dark:fill-white'
        d='M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z'
      />
      <path
        className='fill-black dark:fill-white'
        d='M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z'
      />
      <path
        className='fill-white dark:fill-black'
        d='M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z'
      />
    </svg>
  );
};
