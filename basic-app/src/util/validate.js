/**
 * UserInfo 컴포넌트 폼 체크 함수
 */
export const validateUserInfo = (refs) => {
    if(refs.nameRef.current.value.trim() === "") {
        refs.nameRef.current.focus();
        return false;
    } else if(refs.ageRef.current.value.trim() === "") {
        refs.ageRef.current.focus();
        return false;
    } else if(refs.addressRef.current.value.trim() === "") {
        refs.addressRef.current.focus();
        return false;
    } else if(refs.jobRef.current.value.trim() === "") {
        refs.jobRef.current.focus();
        return false;
    } 
    return true;
}