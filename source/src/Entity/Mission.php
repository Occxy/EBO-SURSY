<?php
# src/Entity/Mission.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Mission
 *
 * @ORM\Table(name="mission")
 * @ORM\Entity
 */
class Mission
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
     * @ORM\Column(name="Mission", type="string", length=255, nullable=true)
     */
    private $mission;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="CaptureDate", type="datetime", nullable=true)
     */
    private $capturedate;



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
     * Set mission
     *
     * @param string $mission
     *
     * @return Mission
     */
    public function setMission($mission)
    {
        $this->mission = $mission;

        return $this;
    }

    /**
     * Get mission
     *
     * @return string
     */
    public function getMission()
    {
        return $this->mission;
    }

    /**
     * Set capturedate
     *
     * @param \DateTime $capturedate
     *
     * @return Mission
     */
    public function setCapturedate($capturedate)
    {
        $this->capturedate = $capturedate;

        return $this;
    }

    /**
     * Get capturedate
     *
     * @return \DateTime
     */
    public function getCapturedate()
    {
        return $this->capturedate;
    }
}
