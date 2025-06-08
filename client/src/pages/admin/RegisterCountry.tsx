import { useRef } from 'react';

export default function RegisterCountry() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const registerCountry = async () => {
    const country = textareaRef.current?.value;

    if (!country) {
      return;
    }

    const response = await fetch('/api/counties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: country,
    });

    if (response.ok) {
      textareaRef.current!.value = '';
      alert('국가가 등록되었습니다.');
    } else {
      alert(`국가 등록에 실패했습니다.`);
    }
  };
  return (
    <div>
      <div>
        <textarea ref={textareaRef} />
      </div>
      <button onClick={registerCountry}>등록</button>
    </div>
  );
}
