import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Instagram } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

const Supporto = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_PUBLIC_KEY'
      );
      console.log(result.text);
      reset();
      alert('Messaggio inviato con successo!');
    } catch (error) {
      console.error(error.text);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen max-sm:pt-20 bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 relative">
            <h2 className="text-3xl font-bold mb-4">Contattaci</h2>
            <p className="mb-8">
              Compila il form che trovi qui di fianco e verrai ricontattato
              da uno specialista del nostro team.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                amministrazione@gldsoftware.it
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                commerciale@gldsoftware.it
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                privacy@gldsoftware.it
              </li>
            </ul>
            <div className="absolute bottom-4 left-4">
              <Instagram size={24} className="cursor-pointer" />
            </div>
            {/* Bubble effect */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/5 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" {...register('nome', { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cognome">Cognome</Label>
                <Input id="cognome" {...register('cognome', { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Telefono</Label>
                <Input id="telefono" {...register('telefono')} />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label>Oggetto:</Label>
              <RadioGroup defaultValue="assistenza-tecnica">
                {['Assistenza tecnica', 'Privacy', 'Assistenza commerciale', 'Altro'].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option.toLowerCase().replace(' ', '-')}
                      id={option.toLowerCase().replace(' ', '-')}
                      {...register('oggetto', { required: true })}
                    />
                    <Label htmlFor={option.toLowerCase().replace(' ', '-')}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="messaggio">Messaggio</Label>
              <Textarea
                id="messaggio"
                {...register('messaggio', { required: true })}
                placeholder="Scrivi qui il tuo messaggio..."
                rows={4}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Supporto;