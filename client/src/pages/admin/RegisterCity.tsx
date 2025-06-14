import { useRef } from 'react';

export default function RegisterCity() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const registerCity = async () => {
    const city = textareaRef.current?.value;

    if (!city) {
      return;
    }

    const response = await fetch('/api/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: city,
    });

    if (response.ok) {
      textareaRef.current!.value = '';
      alert('도시 등록되었습니다.');
    } else {
      alert(`도시 등록에 실패했습니다.`);
    }
  };
  return (
    <div>
      <div>
        <textarea ref={textareaRef} />
      </div>
      <button onClick={registerCity}>등록</button>
    </div>
  );
}
