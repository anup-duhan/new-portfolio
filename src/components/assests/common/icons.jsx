export const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
            <rect width="64" height="64" fill="none" />
            <circle cx="32" cy="32" r="30" fill="#051E55" />
            <path fill="#fff" d="M28.6 17.5h6.9l10.3 29h-6.6l-1.9-6H26.6l-2 6h-6.3zm-.4 18h7.4L32 24.1z" />
        </svg>
    )
}


export const Logoopen = () =>
{
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#051E55"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )
} 


export const Logoclose = () => {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#051E55"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )
}