import { useState } from "react";

function DonneesFormulaire() {
  const [pseudo, setPseudo] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const [falsePseudo, setFalsePseudo] = useState("");
  const [falseFirstname, setFalseFirstname] = useState("");
  const [falseLastname, setFalseLastname] = useState("");
  const [falseEmail, setFalseEmail] = useState("");
  const [falsePassword, setFalsePassword] = useState("");
  const [falseConfirmPassword, setFalseConfirmPassword] = useState("");
  const [falseAvatar, setFalseAvatar] = useState("");

  const MAX_LENGTH_NAME = 45;
  const MIN_LENGTH_PASSWORD = 8;
  const MAX_LENGTH_PASSWORD = 200;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,20})$/g;

  const handleChangePseudo = (p) => {
    if (p.target.value.length <= MAX_LENGTH_NAME) {
      setFalsePseudo("");
      setPseudo(p.target.value);
    } else {
      setFalsePseudo(<small>Le pseudo est trop long</small>);
    }
  };

  const handleChangeFirstname = (f) => {
    if (f.target.value.length <= MAX_LENGTH_NAME) {
      setFalseFirstname("");
      setFirstname(f.target.value);
    } else {
      setFalseFirstname(<small>Le prénom est trop long</small>);
    }
  };

  const handleChangeLastname = (l) => {
    if (l.target.value.length <= MAX_LENGTH_NAME) {
      setFalseLastname("");
      setLastname(l.target.value);
    } else {
      setFalseLastname(<small>Le nom de famille est trop long</small>);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.match(regexEmail)) {
      setFalseEmail("");
    } else {
      setFalseEmail(<small>Le format de l'email ne correspond pas</small>);
    }
  };

  const handleChangePassword = (pw) => {
    setPassword(pw.target.value);
    if (
      (pw.target.value.length > MIN_LENGTH_PASSWORD ||
        pw.target.value.length <= MAX_LENGTH_PASSWORD) &&
      pw.target.value.match(regexPassword)
    ) {
      setFalsePassword("");
    } else {
      setFalsePassword(<small>Le mot de passe n'est pas assez fort</small>);
    }
  };

  const handleChangeConfirmPassword = (cpw) => {
    setConfirmPassword(cpw.target.value);
    if (cpw.target.value === password && password.length !== 0) {
      setFalseConfirmPassword("");
    } else {
      setFalseConfirmPassword(
        <small>Le mot de passe n'est pas identique</small>
      );
    }
  };

  const handleChangeAvatar = (a) => {
    setAvatar(a);
    if (avatar !== undefined) {
      setFalseAvatar("");
    } else {
      setFalseAvatar(<small>Le mot de passe n'est pas assez fort</small>);
    }
  };

  return {
    pseudo,
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    avatar,
    handleChangePseudo,
    handleChangeFirstname,
    handleChangeLastname,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeAvatar,
    falsePseudo,
    falseFirstname,
    falseLastname,
    falseEmail,
    falsePassword,
    falseConfirmPassword,
    falseAvatar,
    setPseudo,
    setFirstname,
    setLastname,
    setEmail,
    setAvatar,
  };
}
export default DonneesFormulaire;
