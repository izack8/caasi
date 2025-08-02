import SectionLabel from "../ui/SectionLabel";
import { API_ENDPOINTS } from '../../config';
import { useEffect, useState } from "react";

function GuestbookSection() {
    const [messages, setMessages] = useState([]);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch(API_ENDPOINTS.guestbook_messages);
            const data = await response.json();
            setMessages(data);
        };

        fetchMessages();
    }, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_ENDPOINTS.guestbook_messages, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    // Optionally re-fetch messages
  };

  return (
    <section className="guestbook-section w-full flex flex-wrap">
      <SectionLabel label="Guestbook" />
      <p className="text-sm text-slate-500 mb-4">Leave a message in the guestbook!</p>
    <div>
      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
        <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
        <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message" required />
        <button type="submit">Sign Guestbook</button>
      </form>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.name}</strong>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default GuestbookSection;