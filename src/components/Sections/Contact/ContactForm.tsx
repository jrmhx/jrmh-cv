import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      from_name: '',
      from_email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const subject = encodeURIComponent('Resume Request From ' + data.from_name);
      const body = encodeURIComponent(`Name: ${data.from_name}\nEmail: ${data.from_email}\nMessage: ${data.message}`);
      const mailtoUrl = `mailto:jeremiah.hsing@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;
    },
    [data],
  );

  const inputClasses =
    'bg-indigo-900/50 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-violet-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-300 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="from_name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-violet-900 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-indigo-800 focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
