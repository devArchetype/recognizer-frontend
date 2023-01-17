import { zodResolver } from '@hookform/resolvers/zod';
import { PaperPlaneTilt } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { Button } from '../../../../components/Button';
import { InputField } from '../../../../components/InputField';
import { TextareaField } from '../../../../components/TextareaField';
import { HomeBaseSection } from '../../../../layouts/HomeBaseSection';
import { ContactFormContainer, ImageContainer, SectionContent } from './styles';

export const ContactSection = () => {
  const ContactFormSchema = zod.object({
    name: zod.string().min(2, { message: 'Insira um nome válido!' }),
    email: zod.string().email({ message: 'Formato de email inválido!' }),
    message: zod
      .string()
      .min(2, { message: 'A mensagem não pode estar vazia!' }),
  });

  type ContactFormFormData = zod.infer<typeof ContactFormSchema>;

  const ContactForm = useForm<ContactFormFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const { formState, register, handleSubmit, reset } = ContactForm;
  const { errors } = formState;

  const handleContactSubmit = ({
    name,
    email,
    message,
  }: ContactFormFormData) => {
    console.log(name, email, message);
    reset();
    toast.info('Mensagem enviada com sucesso!');
  };

  return (
    <HomeBaseSection
      id="contact"
      heading="Fale conosco"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
    laborum magnam ab placeat vero dicta omnis quia quibusdam culpa
    dfjsodcw dsadsads fdf figa"
    >
      <SectionContent>
        <ContactFormContainer onSubmit={handleSubmit(handleContactSubmit)}>
          <InputField
            label="Nome"
            register={register('name', { required: true })}
            errorMessage={errors.name && errors.name.message}
            placeholder="Nome"
            border
            srLabel
            full
          />
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
            placeholder="Email"
            border
            srLabel
            full
          />
          <TextareaField
            label="Mensagem"
            register={register('message', { required: true })}
            errorMessage={errors.message && errors.message.message}
            placeholder="Mensagem"
            border
            srLabel
            full
          />
          <Button
            type="submit"
            label="Enviar Mensagem"
            title="Enviar Mensagem"
            icon={<PaperPlaneTilt />}
          />
        </ContactFormContainer>
        <ImageContainer>
          <img
            src="/images/saly-16.svg"
            alt="Garota sentada de baixo de uma árvore com passaros à volta lendo um livro"
          />
        </ImageContainer>
      </SectionContent>
    </HomeBaseSection>
  );
};
