<?php
# src/Entity/Foetus.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Foetus
 *
 * @ORM\Table(name="foetus", indexes={@ORM\Index(name="NIdentMother", columns={"NIdentMother"})})
 * @ORM\Entity
 */
class Foetus
{
    /**
     * @var integer
     *
     * @ORM\Column(name="N", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $n;

    /**
     * @var string
     *
     * @ORM\Column(name="NIdentMother", type="string", length=255, nullable=true)
     */
    private $nidentmother;

    /**
     * @var integer
     *
     * @ORM\Column(name="NbFoetus", type="integer", nullable=true)
     */
    private $nbfoetus;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus1", type="string", length=255, nullable=true)
     */
    private $sexfoetus1;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus2", type="string", length=255, nullable=true)
     */
    private $sexfoetus2;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus3", type="string", length=255, nullable=true)
     */
    private $sexfoetus3;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus4", type="string", length=255, nullable=true)
     */
    private $sexfoetus4;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus5", type="string", length=255, nullable=true)
     */
    private $sexfoetus5;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus6", type="string", length=255, nullable=true)
     */
    private $sexfoetus6;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus7", type="string", length=255, nullable=true)
     */
    private $sexfoetus7;



    /**
     * Get n
     *
     * @return integer
     */
    public function getN()
    {
        return $this->n;
    }

    /**
     * Set nidentmother
     *
     * @param string $nidentmother
     *
     * @return Foetus
     */
    public function setNidentmother($nidentmother)
    {
        $this->nidentmother = $nidentmother;

        return $this;
    }

    /**
     * Get nidentmother
     *
     * @return string
     */
    public function getNidentmother()
    {
        return $this->nidentmother;
    }

    /**
     * Set nbfoetus
     *
     * @param integer $nbfoetus
     *
     * @return Foetus
     */
    public function setNbfoetus($nbfoetus)
    {
        $this->nbfoetus = $nbfoetus;

        return $this;
    }

    /**
     * Get nbfoetus
     *
     * @return integer
     */
    public function getNbfoetus()
    {
        return $this->nbfoetus;
    }

    /**
     * Set sexfoetus1
     *
     * @param string $sexfoetus1
     *
     * @return Foetus
     */
    public function setSexfoetus1($sexfoetus1)
    {
        $this->sexfoetus1 = $sexfoetus1;

        return $this;
    }

    /**
     * Get sexfoetus1
     *
     * @return string
     */
    public function getSexfoetus1()
    {
        return $this->sexfoetus1;
    }

    /**
     * Set sexfoetus2
     *
     * @param string $sexfoetus2
     *
     * @return Foetus
     */
    public function setSexfoetus2($sexfoetus2)
    {
        $this->sexfoetus2 = $sexfoetus2;

        return $this;
    }

    /**
     * Get sexfoetus2
     *
     * @return string
     */
    public function getSexfoetus2()
    {
        return $this->sexfoetus2;
    }

    /**
     * Set sexfoetus3
     *
     * @param string $sexfoetus3
     *
     * @return Foetus
     */
    public function setSexfoetus3($sexfoetus3)
    {
        $this->sexfoetus3 = $sexfoetus3;

        return $this;
    }

    /**
     * Get sexfoetus3
     *
     * @return string
     */
    public function getSexfoetus3()
    {
        return $this->sexfoetus3;
    }

    /**
     * Set sexfoetus4
     *
     * @param string $sexfoetus4
     *
     * @return Foetus
     */
    public function setSexfoetus4($sexfoetus4)
    {
        $this->sexfoetus4 = $sexfoetus4;

        return $this;
    }

    /**
     * Get sexfoetus4
     *
     * @return string
     */
    public function getSexfoetus4()
    {
        return $this->sexfoetus4;
    }

    /**
     * Set sexfoetus5
     *
     * @param string $sexfoetus5
     *
     * @return Foetus
     */
    public function setSexfoetus5($sexfoetus5)
    {
        $this->sexfoetus5 = $sexfoetus5;

        return $this;
    }

    /**
     * Get sexfoetus5
     *
     * @return string
     */
    public function getSexfoetus5()
    {
        return $this->sexfoetus5;
    }

    /**
     * Set sexfoetus6
     *
     * @param string $sexfoetus6
     *
     * @return Foetus
     */
    public function setSexfoetus6($sexfoetus6)
    {
        $this->sexfoetus6 = $sexfoetus6;

        return $this;
    }

    /**
     * Get sexfoetus6
     *
     * @return string
     */
    public function getSexfoetus6()
    {
        return $this->sexfoetus6;
    }

    /**
     * Set sexfoetus7
     *
     * @param string $sexfoetus7
     *
     * @return Foetus
     */
    public function setSexfoetus7($sexfoetus7)
    {
        $this->sexfoetus7 = $sexfoetus7;

        return $this;
    }

    /**
     * Get sexfoetus7
     *
     * @return string
     */
    public function getSexfoetus7()
    {
        return $this->sexfoetus7;
    }
}
